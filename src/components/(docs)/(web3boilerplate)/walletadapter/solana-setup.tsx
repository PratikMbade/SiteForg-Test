"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react"; // Make sure to install lucide-react
import HighLightedPoints from "../../callouts/callouts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WalletAdapter = () => {
  const [selectedWallet, setSelectedWallet] = useState<"solana" | "ethereum">(
    "solana"
  );

  const solanaCode = `
  "use client";
  import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
  import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
  import React from "react";
  import "@solana/wallet-adapter-react-ui/styles.css";

  <ConnectionProvider endpoint="https://api.devnet.solana.com">
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
          {children}
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  `;

  const ethereumCode = `
  "use client";
  import { ThirdwebProvider } from "thirdweb/react";

  export default function Provider({ children }: { children: React.ReactNode }) {
    return (
      <ThirdwebProvider>
          {children}
      </ThirdwebProvider>
    );
  }
  `;

  const ethereumClient = `
   import { createThirdwebClient, defineChain } from "thirdweb";

   const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

   if (!clientId) {
    throw new Error("No client ID provided");
   }

   export const client = createThirdwebClient({
    clientId: clientId,
   });

  `;

  const setEthEcoChain = 
  `
  export const chainId = defineChain({
    id: 56, // BNB Mainnet id
    rpc: "https://bsc-dataseed.binance.org/", // RPC URL for BNB Mainnet
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
  });
  `

  const handleCopy = (code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {})
      .catch((error) => {
        console.error("Copy failed: ", error);
      });
  };

  return (
    <div className="mt-10 ">
      <Tabs defaultValue="solana" className="w-full">
        <TabsList className="h-12 bg-gray-800">
          <TabsTrigger
            value="solana"
            className="h-10 text-lg px-4"
            onClick={() => setSelectedWallet("solana")}
          >
            Solana Wallet
          </TabsTrigger>
          <TabsTrigger
            value="ethereum"
            className="h-10 text-lg px-4"
            onClick={() => setSelectedWallet("ethereum")}
          >
            Ethereum Wallet
          </TabsTrigger>
        </TabsList>

        <TabsContent value="solana">
          <div className="relative  flex   justify-between items-center w-[100%] ">
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-scroll flex-grow mr-2">
              <code>{solanaCode}</code>
            </pre>

            <div className="absolute top-2 right-4">
              <button
                onClick={() => handleCopy(solanaCode)}
                className="text-gray-400 hover:text-gray-100 transition duration-300"
                aria-label="Copy code"
              >
                <Copy size={24} />
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ethereum">
          <div className="relative  flex   justify-between items-center w-[100%] my-4">
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-scroll flex-grow mr-2">
              <code>{ethereumCode}</code>
            </pre>

            <div className="absolute top-2 right-4">
              <button
                onClick={() => handleCopy(ethereumCode)}
                className="text-gray-400 hover:text-gray-100 transition duration-300"
                aria-label="Copy code"
              >
                <Copy size={24} />
              </button>
            </div>
          </div>

          <div className="my-4">
            <HighLightedPoints
              description="Get Your API Key From Below Link"
              emoji="🔑"
            />
            <div className="flex flex-col lg:flex-row gap-x-2 my-5">
              <p>Take your NEXT_PUBLIC_TEMPLATE_CLIENT_ID from </p>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                  <a
                href="https://thirdweb.com/dashboard/settings/api-keys"
                target="_blank"
                className="border-b-blue-600 font-bold bg-blue-600 rounded-sm px-2 py-1"
              >
                Get API Key
              </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to get key</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          
            </div>
          </div>

          <div className="relative  flex   justify-between items-center w-[100%] my-4">
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-scroll flex-grow mr-2">
              <code>{ethereumClient}</code>
            </pre>

            <div className="absolute top-2 right-4">
              <button
                onClick={() => handleCopy(ethereumCode)}
                className="text-gray-400 hover:text-gray-100 transition duration-300"
                aria-label="Copy code"
              >
                <Copy size={24} />
              </button>
            </div>
          </div>

          <div className="">
          <p className="text-xl">Enter your blockchain details to connect the wallet to the correct chain.</p>
          </div>

          <div className="relative  flex   justify-between items-center w-[100%] my-4">
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-scroll flex-grow mr-2">
              <code>{setEthEcoChain}</code>
            </pre>

            <div className="absolute top-2 right-4">
              <button
                onClick={() => handleCopy(setEthEcoChain)}
                className="text-gray-400 hover:text-gray-100 transition duration-300"
                aria-label="Copy code"
              >
                <Copy size={24} />
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WalletAdapter;
