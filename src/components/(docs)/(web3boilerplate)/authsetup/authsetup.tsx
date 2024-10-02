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

const AuthSetup = () => {
  const [selectedWallet, setSelectedWallet] = useState<"solana" | "ethereum">(
    "solana"
  );

  const solanaCodeAuth = `
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./db";

interface User {
  wallet_address?: string;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }) {
      if (token.wallet_address) {
        session.user = {
          ...session.user,
          wallet_address: token.wallet_address as string,
        };
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user && typeof (user as User).wallet_address === "string") {
        token.wallet_address = (user as User).wallet_address;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

  `;

  const solanaCodeAuthConfig = `
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { BinaryLike, createHash } from "crypto";
import { PublicKey } from "@solana/web3.js";
import * as ed25519 from "@noble/ed25519";
import { db } from "./db";


const sha512 = (data: BinaryLike) => {
  return createHash("sha512").update(data).digest();
};


//@ts-ignore
ed25519.etc.sha512Sync = sha512;

// Function to verify a signed message
async function verifyMessage(
  nonce: string,
  signedNonce: string,
  publicKey: string
): Promise<boolean> {
  const messageBuffer = new TextEncoder().encode(nonce);

  const signatureBuffer = Uint8Array.from(atob(signedNonce), (c) =>
    c.charCodeAt(0)
  );

  const publicKeyBuffer = new PublicKey(publicKey).toBytes();

  const isVerified = await ed25519.verify(
    signatureBuffer,
    messageBuffer,
    publicKeyBuffer
  );

  return isVerified;
}

async function authorizeWeb3Wallet(
  credentials: Partial<Record<"publicAddress" | "signedNonce", string | string>>
) {


  if (!credentials) return null;

  const { publicAddress, signedNonce } = credentials;

  const user = await db.user.findUnique({
    where: {
      wallet_address: publicAddress,
    },
    include: {
      cryptoLoginNonce: true,
    },
  });

  if (!user?.cryptoLoginNonce) return null;

  const isVerified = verifyMessage(
    user.cryptoLoginNonce.nonce,
    signedNonce!,
    publicAddress!
  );

  if (!isVerified) return null;

  if (user.cryptoLoginNonce.expires < new Date()) return null;

  return {
    id: user.id,
    wallet_address: user.wallet_address,
  };
}

export default {
  providers: [
    Credentials({
      id: "crypto",
      name: "Crypto Wallet Auth",
      credentials: {
        publicAddress: { label: "Public Address", type: "text" },
        signedNonce: { label: "Signed Nonce", type: "text" },
      },
      // @ts-expect-error: authorizeWeb3Wallet doesn't match the expected type but is required for custom wallet auth
      authorize: authorizeWeb3Wallet,
    }),
  ],
} satisfies NextAuthConfig;

  `;

  const solanaCodeMiddleware = 
  `
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);
interface AuthenticatedNextRequest extends NextRequest {
  auth?: unknown; // Replace any with unknown if the structure is uncertain
}

export default auth(
  async (req: AuthenticatedNextRequest): Promise<Response | void> => {
    const { nextUrl } = req;

    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
      if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      return NextResponse.next();
    }

    if (isAuthRoute) {
      if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }

      return;
    }

    if (!isLoggedIn && !isPublicRoutes) {
      return Response.redirect(new URL("/", nextUrl));
    }

    return;
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};

  
  `

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

  const setEthEcoChain = `
  export const chainId = defineChain({
    id: 56, // BNB Mainnet id
    rpc: "https://bsc-dataseed.binance.org/", // RPC URL for BNB Mainnet
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
  });
  `;

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

            <div className="my-5">
            <div className="">
            <p className="text-lg font-semibold">src/auth.ts</p>
          </div>
          <div className="relative  flex   justify-between items-center w-[100%] ">
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-scroll flex-grow mr-2">
              <code>{solanaCodeAuth}</code>
            </pre>

            <div className="absolute top-2 right-4">
              <button
                onClick={() => handleCopy(solanaCodeAuth)}
                className="text-gray-400 hover:text-gray-100 transition duration-300"
                aria-label="Copy code"
              >
                <Copy size={24} />
              </button>
            </div>
          </div>

            </div>


            <div className="my-5">
            <div className="">
            <p className="text-lg font-semibold">src/auth.config.ts</p>
          </div>
          <div className="relative  flex   justify-between items-center w-[100%] ">
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-scroll flex-grow mr-2">
              <code>{solanaCodeAuthConfig}</code>
            </pre>

            <div className="absolute top-2 right-4">
              <button
                onClick={() => handleCopy(solanaCodeAuthConfig)}
                className="text-gray-400 hover:text-gray-100 transition duration-300"
                aria-label="Copy code"
              >
                <Copy size={24} />
              </button>
            </div>
          </div>
            </div>

            <div className="my-5">
            <div className="">
            <p className="text-lg font-semibold">src/middleware.ts</p>
          </div>
          <div className="relative  flex   justify-between items-center w-[100%] ">
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-scroll flex-grow mr-2">
              <code>{solanaCodeMiddleware}</code>
            </pre>

            <div className="absolute top-2 right-4">
              <button
                onClick={() => handleCopy(solanaCodeMiddleware)}
                className="text-gray-400 hover:text-gray-100 transition duration-300"
                aria-label="Copy code"
              >
                <Copy size={24} />
              </button>
            </div>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthSetup;
