import { NavbarAuth } from "@/components/global/NavbarAuth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
  

        <NavbarAuth/>
        
        <main>

          {children}
        </main>

   
    </>
  );
}
