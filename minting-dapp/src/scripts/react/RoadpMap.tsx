import React from "react";

export default class RoadMap extends React.Component {
  render() {
    return (
      <>
        {/* <!-- roadmap --> */}
        <section id="roadmap">
          {/* <!-- add color here to see background of container --> */}
          <div className="container mx-auto w-full h-full ">
            {/* <!-- padding here adjusts size of gray container --> */}
            <div className="relative wrap overflow-hidden p-20 pb-10 h-full">
              {/* <!-- timeline color line --> */}
              <div
                className="border-2-2 absolute border-orange-400 h-full border"
                style={{ left: "50%" }}
              ></div>
              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                {/* <!-- position of numbers --> */}
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    1
                  </h1>
                </div>
                <div className="order-1 bg-foxOrange shadow-orange-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-white text-xl">
                    Public Mint LIVE
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    2
                  </h1>
                </div>
                <div className="order-1 bg-green-900 shadow-lime-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-white text-xl">
                    Lorem Ipsum
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    3
                  </h1>
                </div>
                <div className="order-1 bg-foxOrange shadow-orange-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-white text-xl">
                    Lorem Ipsum
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    4
                  </h1>
                </div>
                <div className="order-1 bg-green-900 shadow-lime-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-white text-xl">
                    Lorem Ipsum
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section timeline */}
        {/* <div className="container mx-auto w-full h-full bg-blue-400 "> */}
        <div className="relative wrap mx-auto overflow-hidden p-20 pb-10 h-full  bg-red-400">
          {/* this is the line */}
          <ol className="relative border-l-4 border-gray-200 dark:border-yellow-700 md:inset-1/2">
            <div className="flex bg-blue-400">
              <li className="mb-10 ml-4">
                <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-orange-300"></div>
                <time className="mb-1 text-sm font-normal leading-none text-orange-400 dark:text-orange-400">
                  Phase 1
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Application UI code in Tailwind CSS
                </h3>

                <p className="mb-4 text-base font-normal text-gray-500 dark:text-green-400">
                  After drop we will list Fox Squad on the major rarity sites
                  like Rarity Tools. We will also start the process on becoming
                  Verified on OpenSea.
                </p>
              </li>
            </div>
            <li className="mb-10 ml-4">
              <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Phase 2
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                STAKING + COIN We have plans to create a staking system that
                allows you to earn an ERC20 coin. It will be possible to stake
                your NFTs from the main collection or the other two collections.
                Details will follow, and keep in mind that this is a long-term
                project.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Phase 3
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We will create a snapshot and allow all holders to claim one or
                more loot boxes filled with ETH prizes, discount deals,
                whitelist spots for other projects and even some NFTs.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-6 h-6 bg-gray-200 rounded-full mt-1.5 -left-3.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Phase 4
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
