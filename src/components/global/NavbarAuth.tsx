"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../Buttons/Themetoggle";
import Link from "next/link";

export function NavbarAuth() {
  return (
    <header>
    <div className="relative w-full flex  items-center justify-center">
     <Navbar_Inner className="top-2" />

   </div>
  </header>
  );
}

function Navbar_Inner({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50  ", className)}
    >
      <Menu setActive={setActive}   >

       <div className="flex items-center justify-center space-x-5">
       <Link href='/'>
       <div className="flex items-center justify-center">

           
           <p className="text-2xl font-extrabold">RD StartUp</p>

        </div></Link>
      
       </div>



        <div className="flex items-center space-x-10">
          <div className="flex items-center justify-center space-x-5">
          <Link href="/login">
              {" "}
              <button className="   border border-black/55   dark:border-white/[0.3] px-3 py-1 rounded-2xl ">
                Log in
               </button>
            </Link>
            <Link href="/signup">
              <button className=" border-black/55   dark:border-white/[0.3] px-3 py-1 rounded-2xl bg-orange-500">
                Sign up
              </button>
            </Link>
          </div>
  
        <ModeToggle/>
        </div>

      
      </Menu>

     
    </div>
  );
}
