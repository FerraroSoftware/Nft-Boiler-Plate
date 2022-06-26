import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function Header() {
  // hook, gives access to state (connected to metamask or not)
  // isWeb3Enabled, but we use account instead. web3 could be connected, but no account
  // isWeb3EnableLoading -> checks to see if metamask button popped up
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();
  // takes function {} and dependency array []
  // keeps checking values in dependncy array and if something changes calls function and rerender
  // if no dependncy array: run anytime something re-renders. careful with this, causes circular render
  // blank array runs one time on load
  useEffect(() => {
    if (isWeb3Enabled) return;
    // nextjs has problems with window
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, [isWeb3Enabled]);

  // for handling disconnected from website and annoying popup coming up on refresh
  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changes to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        // sets web3enabled to false
        deactivateWeb3();
        console.log("Null account found");
      }
    });
  }, []);

  return (
    <nav className="relative container mx-auto p-6">
      {/* <!-- flex container --> */}
      <div className="flex items-center justify-between">
        {/* <!-- logo --> */}
        <div className="pt-2">
          <img src="/foxy.svg"></img>
        </div>
        {/* <!-- menu items --> */}
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            OpenSea
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            Story
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            RoapMap
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            Founders
          </a>
          <a href="#" className="hover:text-orange-400 text-white text-xl">
            FAQ
          </a>
        </div>
        <div>
          {/* this is same as connect() in fundme index.js */}
          {account ? (
            <div>
              {/* Connected to {account.slice(0, 6)}...
          {account.slice(account.length - 4)} */}
              <button
                className="border-2 border-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-500 transition duration-300"
                disabled
              >
                Connected!
              </button>
            </div>
          ) : (
            // bg-blue-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-700 transition duration-300"
              onClick={async () => {
                await enableWeb3();
                if (typeof window !== "undefined") {
                  window.localStorage.setItem("connected", "injected");
                }
              }}
              disabled={isWeb3EnableLoading}
            >
              Connect
            </button>
          )}
        </div>

        {/* <!-- hamburger icon --> */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"> </span>
          <span className="hamburger-middle"> </span>
          <span className="hamburger-bottom"> </span>
        </button>
      </div>

      {/* <!-- mobile menu --> */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">About</a>
          <a href="#">Utility</a>
          <a href="#">RoadMap</a>
          <a href="#">Careers</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </nav>
  );
}
