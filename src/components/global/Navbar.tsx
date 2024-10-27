"use client";
import React, { useState } from "react";
import { FileQuestionIcon, Home, InfoIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-modal";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { FaMoneyBill } from "react-icons/fa";

interface NavType {
  name: string;
  href: string;
  current: boolean;
}

interface HeaderRoundedWeb2Types {
  title: string;
  navigationData: NavType[];
  loginPath: string;
  signupPath: string;
}

// {company heading, navigation, login ,signup, }
const HeaderRoundedWeb2 = ({
  title,
  navigationData,
  loginPath,
  signupPath,
}: HeaderRoundedWeb2Types) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "/#Feature", current: true },
    { name: "Pricing", href: "/#Pricing", current: false },
    { name: "Review", href: "/#Review", current: false },
    { name: "FAQ", href: "/#FAQ", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const links = [
    {
      href: "/",
      label: "Features",
      icon: Home,
      className: "text-foreground hover:text-foreground",
    },

    {
      href: "/",
      label: "Pricing",
      icon: FaMoneyBill,
      className: "text-muted-foreground hover:text-foreground",
    },
    {
      href: "/",
      label: "Review",
      icon: InfoIcon,
      className: "text-muted-foreground hover:text-foreground",
    },
    {
      href: "#",
      label: "FAQ",
      icon: FileQuestionIcon,
      className: "text-muted-foreground hover:text-foreground",
    },
   
  ];

  return (
    <>
      <div className="relative  flex items-center justify-center h-24 z-40 ">
        <div className=" fixed bg-gradient-to-r from-neutral-200 to-stone-300  dark:bg-gradient-to-r dark:from-neutral-800 dark:to-stone-800 flex rounded-full  w-[90%]  h-14  lg:[80%] xl:w-3/4">
          <div className="flex  items-center  w-full justify-between mx-5 lg:mx-10 mt-4  mb-3">
            <div className=" dark:hidden">
            <Link href="/">
            <Image
              src="/site-light.png"
              alt="site"
              height={100}
              width={100}
              />
            </Link>
            </div>

            <div className="hidden dark:block">
              <Link href="/">
              <Image
              src="/siteforg.png"
              alt="site"
              height={100}
              width={100}
              />
              </Link>

            </div>

            <div className="hidden lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " text-black dark:text-white"
                        : "text-black/70 dark:text-gray-400  dark:hover:text-white",
                      "rounded-md px-3 py-2  lg:text-sm xl:text-md font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>



            <Sheet>
            <SheetTrigger asChild className="border-none">
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 lg:hidden z-50 mr-4 rounded-[8px]"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col border-none">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-3"
                >
                  <div className=" dark:hidden">
            <Link href="/">
            <Image
              src="/site-light.png"
              alt="site"
              height={100}
              width={100}
              />
            </Link>
            </div>

            <div className="hidden dark:block">
              <Link href="/">
              <Image
              src="/siteforg.png"
              alt="site"
              height={100}
              width={100}
              />
              </Link>

            </div>

                </Link>

                <div className="flex gap-x-4">

                <Link href="/components/header">
                  <Button
                  variant="default"
                  className="rounded-lg"
                  >
                    Dashboard
                  </Button>
                </Link>

            
                </div>

                

                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`mx-[-0.65rem] flex items-center gap-4  rounded-xl px-3 py-2 ${link.className}`}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}


              </nav>

              <ModeToggle/>
            </SheetContent>
          </Sheet>

      

            <div className="hidden lg:flex items-center justify-center gap-x-3">
              <div className="flex gap-x-4">
                <Link href="/components/header">
                  <Button
                  variant="default"
                  className="rounded-lg"
                  >
                    Dashboard
                  </Button>
                </Link>

            
              </div>

              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Panel */}
        </div>


  

        </div>

    </>
  );
};

export default HeaderRoundedWeb2;
