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
                style={{left: "50%"}}
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
<div className="container mx-auto w-full h-full ">
<div className="relative wrap overflow-hidden p-20 pb-10 h-full">
   {/* this is the line */}
        <ol className="relative border-l border-gray-200 dark:border-yellow-700 md:inset-1/2"
        >                  
    <li className="mb-10 ml-4">
      {/* className="border-2-2 absolute border-orange-400 h-full border"
                style={{left: "50%"}} */}
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>
</div>
</div>
      </>
    );
  }
}
