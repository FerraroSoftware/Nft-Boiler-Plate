import React from 'react';
import { ethers, BigNumber } from 'ethers'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import detectEthereumProvider from '@metamask/detect-provider';
import NftContractType from '../lib/NftContractType';
import CollectionConfig from '../../../../smart-contract/config/CollectionConfig';
import NetworkConfigInterface from '../../../../smart-contract/lib/NetworkConfigInterface';
import CollectionStatus from './CollectionStatus';
import MintWidget from './MintWidget';
import Whitelist from '../lib/Whitelist';
import { toast } from 'react-toastify';


const ContractAbi = require('../../../../smart-contract/artifacts/contracts/' + CollectionConfig.contractName + '.sol/' + CollectionConfig.contractName + '.json').abi;


interface Props {
  
}

interface State {
   userAddress: string|null;
   network: ethers.providers.Network|null;
   networkConfig: NetworkConfigInterface;
   totalSupply: number;
   maxSupply: number;
   maxMintAmountPerTx: number;
   tokenPrice: BigNumber;
   isPaused: boolean;
   loading: boolean;
   isWhitelistMintEnabled: boolean;
   isUserInWhitelist: boolean;
   merkleProofManualAddress: string;
   merkleProofManualAddressFeedbackMessage: string|JSX.Element|null;
   errorMessage: string|JSX.Element|null;
 }
 
 const defaultState: State = {
   userAddress: null,
   network: null,
   networkConfig: CollectionConfig.mainnet,
   totalSupply: 0,
   maxSupply: 0,
   maxMintAmountPerTx: 0,
   tokenPrice: BigNumber.from(0),
   isPaused: true,
   loading: false,
   isWhitelistMintEnabled: false,
   isUserInWhitelist: false,
   merkleProofManualAddress: '',
   merkleProofManualAddressFeedbackMessage: null,
   errorMessage: null,
 };

export default class Header extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);

//     this.state = defaultState;
//   }

private isNotMainnet(): boolean
  {
    return this.state.network !== null && this.state.network.chainId !== CollectionConfig.mainnet.chainId;
  }

  private isWalletConnected(): boolean
  {
    return this.state.userAddress !== null;
  }

  provider!: Web3Provider;

  contract!: NftContractType;

  private merkleProofManualAddressInput!: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  componentDidMount = async () => {
    const browserProvider = await detectEthereumProvider() as ExternalProvider;

    if (browserProvider?.isMetaMask !== true) {
      this.setError(
        <>
          We were not able to detect <strong>MetaMask</strong>. We value <strong>privacy and security</strong> a lot so we limit the wallet options on the DAPP.<br />
          <br />
          But don't worry! <span className="emoji">😃</span> You can always interact with the smart-contract through <a href={this.generateContractUrl()} target="_blank">{this.state.networkConfig.blockExplorer.name}</a> and <strong>we do our best to provide you with the best user experience possible</strong>, even from there.<br />
          <br />
          
        </>,
      );
    }

    this.provider = new ethers.providers.Web3Provider(browserProvider);

    this.registerWalletEvents(browserProvider);

    await this.initWallet();
  }

  render() {
    return (
      <>
        <nav className="relative container mx-auto p-6">
      {/* <!-- flex container --> */}
      <div className="flex items-center justify-between">
        {/* <!-- logo --> */}
        <div className="pt-2">
          <img src="/build/images/foxy.svg"></img>
        </div>
        {/* <!-- menu items --> */}
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            OpenSea
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            Discord
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            RoapMap
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            Founders
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            FAQ
          </a>
        </div>
        <div>
         
            {!this.isWalletConnected() ? <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-700 transition duration-30" disabled={this.provider === undefined} onClick={() => this.connectWallet()}>Connect Wallet</button> : <button
                className="border-2 border-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-500 transition duration-300"
                disabled
              >
                Connected!
              </button>}
        </div>

        {/* <!-- hamburger icon --> */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"> </span>
          <span className="hamburger-middle"> </span>
          <span className="hamburger-bottom"> </span>
        </button>
      </div>

      {/* <!-- mobile menu --> */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">About</a>
          <a href="#">Utility</a>
          <a href="#">RoadMap</a>
          <a href="#">Careers</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </nav>
      </>
    );
  }

  private setError(error: any = null): void
  {
    let errorMessage = 'Unknown error...';

    if (null === error || typeof error === 'string') {
      errorMessage = error;
    } else if (typeof error === 'object') {
      // Support any type of error from the Web3 Provider...
      if (error?.error?.message !== undefined) {
        errorMessage = error.error.message;
      } else if (error?.data?.message !== undefined) {
        errorMessage = error.data.message;
      } else if (error?.message !== undefined) {
        errorMessage = error.message;
      } else if (React.isValidElement(error)) {
        this.setState({errorMessage: error});

        return;
      }
    }

    this.setState({
      errorMessage: null === errorMessage ? null : errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
    });
  }

  private generateContractUrl(): string
  {
    return this.state.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!);
  }

  private generateMarketplaceUrl(): string
  {
    return CollectionConfig.marketplaceConfig.generateCollectionUrl(CollectionConfig.marketplaceIdentifier, !this.isNotMainnet());
  }

  private generateTransactionUrl(transactionHash: string): string
  {
    return this.state.networkConfig.blockExplorer.generateTransactionUrl(transactionHash);
  }

  private async connectWallet(): Promise<void>
  {
    try {
      await this.provider.provider.request!({ method: 'eth_requestAccounts' });

      this.initWallet();
    } catch (e) {
      this.setError(e);
    }
  }

  private async refreshContractState(): Promise<void>
  {
    this.setState({
      maxSupply: (await this.contract.maxSupply()).toNumber(),
      totalSupply: (await this.contract.totalSupply()).toNumber(),
      maxMintAmountPerTx: (await this.contract.maxMintAmountPerTx()).toNumber(),
      tokenPrice: await this.contract.cost(),
      isPaused: await this.contract.paused(),
      isWhitelistMintEnabled: await this.contract.whitelistMintEnabled(),
      isUserInWhitelist: Whitelist.contains(this.state.userAddress ?? ''),
    });
  }

  private async initWallet(): Promise<void>
  {
    const walletAccounts = await this.provider.listAccounts();

    this.setState(defaultState);

    if (walletAccounts.length === 0) {
      return;
    }

    const network = await this.provider.getNetwork();
    let networkConfig: NetworkConfigInterface;

    if (network.chainId === CollectionConfig.mainnet.chainId) {
      networkConfig = CollectionConfig.mainnet;
    } else if (network.chainId === CollectionConfig.testnet.chainId) {
      networkConfig = CollectionConfig.testnet;
    } else {
      this.setError('Unsupported network!');

      return;
    }

    this.setState({
      userAddress: walletAccounts[0],
      network,
      networkConfig,
    });

    if (await this.provider.getCode(CollectionConfig.contractAddress!) === '0x') {
      this.setError('Could not find the contract, are you connected to the right chain?');

      return;
    }

    this.contract = new ethers.Contract(
      CollectionConfig.contractAddress!,
      ContractAbi,
      this.provider.getSigner(),
    ) as NftContractType;

    this.refreshContractState();
  }

  private registerWalletEvents(browserProvider: ExternalProvider): void
  {
    // @ts-ignore
    browserProvider.on('accountsChanged', () => {
      this.initWallet();
    });

    // @ts-ignore
    browserProvider.on('chainChanged', () => {
      window.location.reload();
    });
  }
}

