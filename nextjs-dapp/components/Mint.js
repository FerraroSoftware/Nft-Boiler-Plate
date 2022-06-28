import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";

export default function Header() {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const raffleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  // starting value 0
  const [entranceFee, setEntranceFee] = useState("0");
  const [numPlayers, setNumPlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("0");

  // used for pop ups
  const dispatch = useNotification();

  const {
    runContractFunction: enterRaffle,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    params: {},
    msgValue: entranceFee,
  });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  });

  return (
    <section id="mint" className="">
      {/* <!-- mint Container --> */}
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold text-white leading-normal mt-14 md:text-6xl">
          Join the Fox Foundation and Help Save a Fox
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-gray-400 text-sm md:max-w-xl md:text-lg">
          30% of proceeds during minting phase will be donated directly to the
          fox foundation. Jump into the den below to learn more about our sassy
          NFT foxes
        </p>
        <button className="p-3 rounded-full w-52 bg-orange-400 hover:scale-105">
          Mint
        </button>
      </div>
    </section>
  );
}
