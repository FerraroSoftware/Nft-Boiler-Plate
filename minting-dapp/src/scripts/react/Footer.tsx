import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-veryDarkBlue">
          {/* <!-- flex container --> */}
          <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            {/* <!-- logo and social links container --> */}
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
              <div className="mx-auto my-6 text-center text-white md:hidden">
                CopyRight &copy; 2022, All Rights Reserved
              </div>

              {/* <!-- logo --> */}
              <div>
                <img src="/build/images/foxy.svg" className="h-8" alt="" />
              </div>
              {/* <!-- social links container --> */}
              
            </div>
            {/* <!-- list container --> */}
            <div className="flex justify-around space-x-32">
              <div className="flex flex-row space-x-3 text-white">
              <a href="">
                  <img
                    src="/build/images/icon-twitter.svg"
                    alt=""
                    className="h-8"
                  />
                </a>
                <a href="">
                  <img
                    src="/build/images/icon-instagram.svg"
                    alt=""
                    className="h-8"
                  />
                </a>

                <a href="">
                  <img
                    src="/build/images/icon-youtube.svg"
                    alt=""
                    className="h-8"
                  />
                </a>

                <a href="">
                  <img
                    src="/build/images/icon-facebook.svg"
                    alt=""
                    className="h-8"
                  />
                </a>
              </div>
            </div>

            {/* <!-- input container --> */}
            <div className="flex flex-col justify-between">
              <div className="hidden text-white md:block">
                Clover Contracts© 2022
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
