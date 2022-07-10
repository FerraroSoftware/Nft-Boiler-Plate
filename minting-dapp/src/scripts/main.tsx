import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import Features from './react/Features'
import Footer from './react/Footer'
import FAQTwo from './react/FAQTwo'
import FAQ from './react/FAQ'
import Team from './react/Team'
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
    <Dapp />
    <Features></Features>
    <Team></Team>
    <RoadMap></RoadMap>
    {/* <FAQ></FAQ> */}
    <FAQTwo></FAQTwo>
    <Footer></Footer>
  </>, document.getElementById('minting-dapp'));
});
