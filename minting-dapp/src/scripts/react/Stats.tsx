import React from "react";

export default class Stats extends React.Component {
  render() {
    return (
      <section className="py-12 mb-2 bg-base-900 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 md:flex rounded-xl">
            <div className="absolute right-0 transform -translate-y-1/2 translate-x-80 md:translate-x-36 top-1/2 md:top-0 md:-translate-y-24">
              <svg
                className="blur-3xl filter"
                style={{ filter: "blur(64px)" }}
                width="518"
                height="337"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M297.629 36.521C425.034 36.521 518-55.783 518 53.097S184.03 337 56.625 337c-127.406 0 0-175.023 0-283.903 0-108.88 113.599-16.576 241.004-16.576Z"
                  fill="url(#a)"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="0"
                    y1="337"
                    x2="36.01"
                    y2="-45.389"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "var(--color-cyan-500)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "var(--color-purple-500)" }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute inset-y-0 right-0 hidden md:block">
              <img
                className="w-full max-w-md  "
                src="/build/images/redfox.svg"
                alt=""
              />
            </div>

            <div className="relative w-full p-6 sm:p-10 lg:py-16 lg:px-20 md:w-1/2 lg:w-2/3">
              <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
                3,333 Foxes
              </h2>
              <p className="max-w-sm mt-6 text-base font-normal text-gray-400 sm:text-lg">
                Foxes is a collection of 3,333 thoughtfully designed and
                randomly generated NFTs on the Ethereum Blockchain by Peruvian artist Bean. Fox holders can participate in exclusive
                events, such as: NFT claims, raffles, giveaways and much, much
                more. Don't forget, all Fox are special -- but some are
                especially special. ... and the best is yet to come, check out
                our roadmap below.
              </p>
            </div>

            <div className="relative md:hidden">
              <img className="w-full" src="/build/images/redfox.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
