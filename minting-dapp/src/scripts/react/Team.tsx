import React from "react";

export default class Team extends React.Component {
  render() {
    return (
      <>
        <section id="team">
          {/* <!-- Container to heading and testm blocks --> */}
          <div className="max-w-6xl px-5 mx-auto  text-center">
            {/* <!-- Heading --> */}
            <h2 className="text-6xl underline font-bold text-center leading-tight
                          bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-300">
              THE FOX DEN
            </h2>
            {/* <!-- Testimonials Container --> */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              {/* <!-- Testimonial 1 --> */}
              <div className="flex flex-col shadow-xl  shadow-orange-400 items-center mb-10 p-6 space-y-6 rounded-lg bg-green-900 transform hover:scale-105 hover:rounded-xl duration-200 md:w-1/3">
                <img
                  src="/build/images/bluefox.svg"
                  className="w-24 -mt-14"
                  alt=""
                />
                <h5 className="text-3xl underline font-serif font-bold text-orange-400">
                  Foxy Roxy
                </h5>
                <p className="italic text-2xl text-orange-300">
                  Marketing Director
                </p>
                <p className="text-gray-300 tracking-tight">Roxy has been in the marketing game for over ten years now. She focuses on community growth and spreading the word about the need to help foxes.</p>
              </div>

              {/* <!-- Testimonial 2 --> */}
              <div className="flex flex-col shadow-xl  shadow-orange-400 items-center mb-10 p-6 space-y-6 rounded-lg bg-green-900 transform hover:scale-105 hover:rounded-xl duration-200  md:w-1/3">
                <img
                  src="/build/images/bluefox.svg"
                  className="w-24 -mt-14"
                  alt=""
                />
                <h5 className="text-3xl font-serif text-orange-400 underline font-bold ">
                  The Bean
                </h5>
                <p className="italic text-2xl text-orange-300">Artist / Founder</p>
                <p className="text-gray-300 tracking-tight">Bean is an artist with 12 years of experience. It has been a passion of hers her whole life and wants to use those skills to give back to the community.</p>
              </div>

              {/* <!-- Testimonial 3 --> */}
              <div className="flex flex-col  shadow-xl  shadow-orange-400 items-center mb-10 p-6 space-y-6 rounded-lg bg-green-900 transform hover:scale-105 hover:rounded-xl duration-200 md:w-1/3">
                <img
                  src="/build/images/bluefox.svg"
                  className="w-24 -mt-14"
                  alt=""
                />
                <h5 className="text-3xl font-serif text-orange-400 underline font-bold ">
                  Big Tony
                </h5>
                <p className="italic  text-2xl text-orange-300">
                  Blockchain Dev
                </p>
                <p className="text-gray-300 tracking-tight">Tony has been writing software for over seven years now. He specialized first in satellites and now has moved all of his focus to Web3.</p>
              </div>

              {/* <!-- Testimonial 4--> */}
              <div className="flex flex-col shadow-xl  shadow-orange-400 items-center mb-10 p-6 space-y-6 rounded-lg bg-green-900 transform hover:scale-105  hover:rounded-xl duration-200 md:w-1/3">
                <img
                  src="/build/images/bluefox.svg"
                  className="w-24 -mt-14"
                  alt=""
                />
                <h5 className="text-3xl font-serif text-orange-400 underline font-bold">
                  Frank
                </h5>
                <p className="italic text-2xl text-orange-300">Business Fox</p>
                <p className="text-gray-300 tracking-tight">Frank has been in the cutting edge of mobile, gaming and e-commerce his entire career. He focuses on business adventures and how to bring value back to the investors.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
