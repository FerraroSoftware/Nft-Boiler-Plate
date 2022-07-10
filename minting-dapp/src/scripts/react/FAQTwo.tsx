import React, { useState } from "react";

export default class FAQTwo extends React.Component {
  render() {
    return (
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl
                          bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-300">
              Questions & Answers
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Everything you need to know
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  What are NFTs?
                </p>
                <p className="mt-4 text-base text-gray-400">
                  A non-fungible token (NFT) is a non-interchangeable unit of
                  data stored on a blockchain, a form of digital ledger, that
                  can be sold and traded. NFTs may be associated with digital
                  files such as photos, videos, and audio. Because each token is
                  uniquely identifiable, NFTs differ from blockchain
                  cryptocurrencies, such as Bitcoin.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                What Wallets are Supported?

                </p>
                <p className="mt-4 text-base text-gray-400">
                We recommend using MetaMask, which can be downloaded from the MetaMask website. We support both the browser plugin and the mobile apps.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                Where does my NFT go after I purchase a Fox?

                </p>
                <p className="mt-4 text-base text-gray-400">
                Your wallet will own the NFT. You will be able to see the contents of your wallet on your OpenSea profile, and some wallets display your NFTs as well.


                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                Are Foxes a good investment?

                </p>
                <p className="mt-4 text-base text-gray-400">
                The success of the project depends on many factors. We do not have a crystal ball so it is impossible to know how it will go, but we strongly believe in our project and think it has a bright future ahead, but ultimately you will have to decide for yourself.

Only spend money if you can afford it!
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                What is Ethereum?


                </p>
                <p className="mt-4 text-base text-gray-400">
                Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications. Learn more on ethereum.org
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                Sounds awesome - How do I get involved?


                </p>
                <p className="mt-4 text-base text-gray-400">
                A great place to start is our Discord, home to a very large and very active community of Fox enthusiasts. You don't need to be a Fox holder to join us there! All are welcome to jump into the conversation, let us know your ideas, and hang out with many others who like the bears!
                </p>
              </div>
            </div>
          </div>

          

          <div className="flex items-center justify-center mt-12 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
              <p className="text-gray-50">
                Didn’t find the answer you are looking for?{" "}
                <a
                  href="#"
                  title=""
                  className="text-orange-300 transition-all duration-200 hover:text-orange-400 focus:text-orange-400 hover:underline"
                >
                  Join Our Discord
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
