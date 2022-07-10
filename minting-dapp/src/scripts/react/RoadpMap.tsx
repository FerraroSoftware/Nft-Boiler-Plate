import React from "react";

export default class RoadMap extends React.Component {
  render() {
    return (
      <>
        

        {/* section timeline */}
        <div className="max-w-2xl  mx-auto p-20 pb-10 h-full ">
          {/* this is the line */}
          <ol className="relative border-l-4 border-gray-200 dark:border-orange-400 md:inset-1/2">
            <li className="mb-10 ml-4  md:left-auto  lg:shadow-green-300 lg:shadow-xl lg:bg-green-900 lg:px-6 lg:py-4 lg:rounded-lg">
              <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-orange-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-orange-400 dark:text-orange-400">
                Phase 1
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Deployment
              </h3>

              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                After drop we will list Fox Squad on the major rarity sites like
                Rarity Tools. We will also start the process on becoming
                Verified on OpenSea.
              </p>
            </li>
            <li className="mb-10 ml-4 lg:shadow-green-300 lg:shadow-xl lg:bg-green-900 lg:px-6 lg:py-4 lg:rounded-lg">
              <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Phase 2
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                STAKING + COIN
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-300">
                We have plans to create a staking system that allows you to earn
                an ERC20 coin. It will be possible to stake your NFTs from the
                main collection or the other two collections. Details will
                follow, and keep in mind that this is a long-term project.
              </p>
            </li>
            <li className="mb-10 ml-4 lg:shadow-green-300 lg:shadow-xl lg:bg-green-900 lg:px-6 lg:py-4 lg:rounded-lg">
              <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Phase 3
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Loot Boxes
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-300">
                We will create a snapshot and allow all holders to claim one or
                more loot boxes filled with ETH prizes, discount deals,
                whitelist spots for other projects and even some NFTs.
              </p>
            </li>
            <li className="ml-4 lg:shadow-green-300 lg:shadow-xl lg:bg-green-900 lg:px-6 lg:py-4 lg:rounded-lg">
              <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Phase 4
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Future project access
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-300">
                We will develop a workshop that allows you to mix and match
                traits from the foxes you are currently holding (plus some other
                traits) and mint a Baby Fox version for free - just pay for gas.
                You will be able to mint one Baby Fox NFT per Fox Squad NFT that
                you hold in your wallet.
              </p>
            </li>
          </ol>
        </div>
        {/* </div> */}
      </>
    );
  }
}
