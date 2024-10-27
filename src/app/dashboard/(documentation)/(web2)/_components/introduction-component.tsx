'use client'

import { MDXProvider } from '@mdx-js/react';
import SolanaRepoLink from "@/components/(docs)/(web3boilerplate)/web3solana";

const MDXContent = () => (
  <>
    <h2 className='text-5xl font-bold'>🚀 Getting Started</h2>
    <div className="text-2xl my-5 text-muted-foreground">
      Welcome to the <strong>Web3 Boilerplate</strong>! This template is designed to simplify dApp development on both <strong>Ethereum</strong> 🦄 and <strong>Solana</strong> ⚡ ecosystems.
    </div>
   <strong className='text-2xl font-semibold'>Next.js 14 App Router</strong>
   <p className='text-xl font-semibold'>Features</p>
    <ul>
      <li>🔗 <strong>Wallet adapter</strong> for easy wallet connections</li>
      <li>🔐 <strong>Auth.js v4</strong> for secure authentication</li>
      <li>🗄️ <strong>Prisma ORM</strong> for smooth database management</li>
    </ul>
    <SolanaRepoLink />
  </>
);

export const IntroductionComponents = () => {
  return (
     <div className='max-w-6xl flex flex-col '>
            <MDXProvider components={{ SolanaRepoLink }}>
      <MDXContent />
    </MDXProvider>
     </div>
  );
};
