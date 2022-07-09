import React from "react";

export default class Testimonial extends React.Component {
  render() {
    return (
      <>
        <section id="testimonials">
          {/* <!-- Container to heading and testm blocks --> */}
          <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* <!-- Heading --> */}
            <h2 className="text-4xl underline font-bold text-center text-white">
              THE FOX DEN
            </h2>
            {/* <!-- Testimonials Container --> */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              {/* <!-- Testimonial 1 --> */}
              <div className="flex flex-col shadow-xl  shadow-lime-300 items-center mb-10 p-6 space-y-6 rounded-lg bg-green-900 md:w-1/3">
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
              </div>

              {/* <!-- Testimonial 2 --> */}
              <div className="flex flex-col shadow-xl  shadow-lime-300 items-center mb-10 p-6 space-y-6 rounded-lg bg-green-900 md:w-1/3">
                <img
                  src="/build/images/bluefox.svg"
                  className="w-24 -mt-14"
                  alt=""
                />
                <h5 className="text-3xl font-serif text-orange-400 underline font-bold text-foxOrange">
                  The Bean
                </h5>
                <p className="italic text-2xl text-orange-300">Artist</p>
              </div>

              {/* <!-- Testimonial 3 --> */}
              <div className="flex flex-col  shadow-xl  shadow-lime-300 items-center mb-10 p-6 space-y-6 rounded-lg bg-green-900 md:w-1/3">
                <img
                  src="/build/images/bluefox.svg"
                  className="w-24 -mt-14"
                  alt=""
                />
                <h5 className="text-3xl font-serif text-orange-400 underline font-bold text-foxOrange">
                  Big Tony
                </h5>
                <p className="italic text-2xl text-orange-300">
                  Blockchain Developer
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
