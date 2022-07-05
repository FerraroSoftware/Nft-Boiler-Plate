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

export default class Features extends React.Component {


  render() {
    return (
      <><section id="features">
      <div
        className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        <div className="md:w-1/2 w-full h-full">
          <img src="/build/images/bluefox.svg" className="object-fill w-full h-full" alt="" />
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2 mx-10 my-10">
          <div
            className="flex grow flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div className="rounded-l-full bg-orange-500 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-foxOrange"
                >
                  01
                </div>
                <h3 className="text-base font-bold text-white md:mb-4 md:hidden">
                  30% of Initial Mint Donated to Save a Fox
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                30% of Initial Mint Donated to Save a Fox
              </h3>
              <p className="text-gray-300">
                The logic is already built into the smart contract. One week
                after the public mint, 30% of the wallet will be sent directrly
                to Save a Fox, the greatest Fox Sanctuary there is.
              </p>
            </div>
          </div>
          {/* <!-- list item 2 --> */}
          <div
            className="flex grow flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- heading --> */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-foxOrange"
                >
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden text-white">
                  30% of Initial Mint and royalites contribured to DOA
                </h3>
              </div>
            </div>
            {/* <!-- hack to align on big screen. Hidden by default for mobile. Look above for mobile --> */}
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                30% of Initial Mint and royalites contribured to DOA
              </h3>
              <p className="text-gray-300">
                We want to give back to the commnuity for all of your support. A
                portion of initial mints will be put into a community wallet, to
                donate, make purchases and airdrops.
              </p>
            </div>
          </div>
          {/* <!-- list item 3 --> */}
          <div
            className="flex grow flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- heading --> */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-foxOrange"
                >
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>
            {/* <!-- hack to align on big screen. Hidden by default for mobile. Look above for mobile --> */}
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                40% of Initial Mint for Founders, Developers and Community
                Growth
              </h3>
              <p className="text-white">
                A portion of the initial mint will go the team, initial fees,
                promotions and future events to come. We plan to dedicate a
                portion of this to growing the community and raising awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
    );
  }
}