import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import Hero from './react/Hero';
import Features from './react/Features'
import Testimonial from './react/Testimonial'
import Header from './react/Header';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import NetworkConfigInterface from '../../../smart-contract/lib/NetworkConfigInterface';
import { ToastContainer } from 'react-toastify';
import RoadMap from './react/RoadpMap';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<>
    <ToastContainer
          position='top-left'
          autoClose={5000}
          closeOnClick={true}
          pauseOnHover={true}
          theme='light' />
    <Header></Header>
    {/* <Hero networkConfig={this.state.networkConfig}
                    maxSupply={this.state.maxSupply}
                    totalSupply={this.state.totalSupply}
                    tokenPrice={this.state.tokenPrice}
                    maxMintAmountPerTx={this.state.maxMintAmountPerTx}
                    isPaused={this.state.isPaused}
                    isWhitelistMintEnabled={this.state.isWhitelistMintEnabled}
                    isUserInWhitelist={this.state.isUserInWhitelist}
                    mintTokens={(mintAmount) => this.mintTokens(mintAmount)}
                    whitelistMintTokens={(mintAmount) => this.whitelistMintTokens(mintAmount)}
                    loading={this.state.loading}></Hero> */}
    <Dapp />
    <Features></Features>
    <Testimonial></Testimonial>
    <RoadMap></RoadMap>
  </>, document.getElementById('minting-dapp'));
});
