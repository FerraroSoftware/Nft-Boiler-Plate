import { utils, BigNumber } from "ethers";
import React from "react";
import NetworkConfigInterface from "../../../../smart-contract/lib/NetworkConfigInterface";

interface Props {
  networkConfig: NetworkConfigInterface;
  maxSupply: number;
  totalSupply: number;
  tokenPrice: BigNumber;
  maxMintAmountPerTx: number;
  isPaused: boolean;
  loading: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  mintTokens(mintAmount: number): Promise<void>;
  whitelistMintTokens(mintAmount: number): Promise<void>;
}

interface State {
  mintAmount: number;
}

const defaultState: State = {
  mintAmount: 1,
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(
        this.props.maxMintAmountPerTx,
        this.state.mintAmount + 1
      ),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount);

      return;
    }

    await this.props.whitelistMintTokens(this.state.mintAmount);
  }

  render() {
    return (
      <>
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white"
                data-aos="zoom-y-out"
              >
                Join the Fox{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-300">
                  Sanctuary
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-300 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  The foxes are hiding out in the den. They are looking for a
                  new owner to help them survive in the metaverse.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  {this.canMint() ? (
                    <div
                      className={`flex flex-col items-center rounded-lg overflow-hidden bg-orange-500 text-white shadow p-4 ${
                        this.props.loading
                          ? "animate-pulse saturate-0 pointer-events-none"
                          : ""
                      }`}
                    >
                      {/* what we preview before minting the NFT i think
          <div className="preview">
            <img src="/build/images/preview.png" alt="Collection preview" />
          </div> */}

                      <div className="price">
                        <strong>Total price:</strong>{" "}
                        {utils.formatEther(
                          this.props.tokenPrice.mul(this.state.mintAmount)
                        )}{" "}
                        {this.props.networkConfig.symbol}
                      </div>

                      {/* here we control how many we mint and the mint button */}
                      <div className="controls p-4">
                        <button
                          className="decrease"
                          disabled={this.props.loading}
                          onClick={() => this.decrementMintAmount()}
                        >
                          -
                        </button>
                        <span className="mint-amount p-4">
                          {this.state.mintAmount}
                        </span>
                        <button
                          className="increase"
                          disabled={this.props.loading}
                          onClick={() => this.incrementMintAmount()}
                        >
                          +
                        </button>
                      </div>
                      

                      <div>
                        <button
                          className="bg-orange-300 text-white px-4 py-2 mx-2 rounded-md text-1xl font-medium hover:bg-orange-500 transition duration-30"
                          disabled={this.props.loading}
                          onClick={() => this.mint()}
                        >
                          Mint
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <a
                          className="bg-orange-500 text-white px-4 py-2 mx-2 rounded-md text-1xl font-medium hover:bg-orange-700 transition duration-30"
                          href="#0"
                        >
                          OpenSea
                        </a>
                      </div>
                      <div>
                        <a
                          className="mx-2 border-2 border-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-500 transition duration-300"
                          href="#0"
                        >
                          Contract
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Hero image */}
            {/* <div>
              <div className="relative flex  mb-8">
                <div className="flex flex-col ">
                  <img
                    className="mx-auto"
                    src={"/build/images/woods2.svg"}
                    alt="Hero"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
      </>
    );
  }
}
