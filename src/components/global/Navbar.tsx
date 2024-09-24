"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../Buttons/Themetoggle";
import Link from "next/link";

export function Navbar() {
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
      className={cn(
        "fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 mt-2  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-center space-x-5">
          <Link href="/">
            <div className="flex items-center justify-center">
           
              <p className="text-2xl font-extrabold">RD StartUp</p>
            </div>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Website Builder</HoveredLink>
              <HoveredLink href="/interface-design">
                Text2Image Generator
              </HoveredLink>
              <HoveredLink href="/interface-design">
                Text2Video Generator
              </HoveredLink>
              <HoveredLink href="/interface-design">
                Text2Content Generator
              </HoveredLink>


            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4"></div>
          </MenuItem>
          <Link href='/dashboard'>
          <MenuItem setActive={setActive} active={active} item="Dashboard">
           
           </MenuItem></Link>

          <MenuItem setActive={setActive} active={active} item="Docs">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Enterprise">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
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
              <button className=" border-black/55   dark:border-white/[0.3] px-3 py-1 rounded-2xl bg-primary text-white">
                Sign up
              </button>
            </Link>
          </div>

          <ModeToggle />
        </div>
      </Menu>
    </div>
  );
}
