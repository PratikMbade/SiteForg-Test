"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-modal";
import Link from "next/link";
import Image from "next/image";

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
    { name: "Home", href: "#", current: true },
    { name: "Product", href: "#", current: false },
    { name: "Feature", href: "#", current: false },
    { name: "About", href: "#", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="relative  flex items-center justify-center h-24 z-40 ">
        <div className=" fixed bg-gradient-to-r from-neutral-200 to-stone-300  dark:bg-gradient-to-r dark:from-neutral-800 dark:to-stone-800 flex rounded-full w-[90%]  h-14  lg:[80%] xl:w-3/4">
          <div className="flex  items-center  w-full justify-between mx-5 lg:mx-10 mt-4  mb-3">
            <div className=" dark:hidden">
              <Image
              src="/site-light.png"
              alt="site"
              height={100}
              width={100}
              />
            </div>

            <div className="hidden dark:block">
              <Image
              src="/siteforg.png"
              alt="site"
              height={100}
              width={100}
              />
            </div>

            <div className="hidden lg:block">
              <div className="flex space-x-4">
                {navigationData.map((item) => (
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

            <div className="lg:hidden">
              <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md  p-1"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            <div className="hidden lg:flex items-center justify-center gap-x-3">
              <div className="flex gap-x-4">
                <Link href={loginPath}>
                  <Button
                    variant="outline"
                    className="border px-6 text-sm rounded-full"
                  >
                    Login
                  </Button>
                </Link>

                <Link href={signupPath}>
                  <Button
                    variant="secondary"
                    className="bg-white text-black px-6 text-sm rounded-full"
                  >
                    SignUp
                  </Button>
                </Link>
              </div>

              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Panel */}
        </div>

        <div
          className={`lg:hidden ${
            isOpen
              ? "block absolute top-24 z-50 bg-white  dark:bg-black w-[80%] left-10 rounded-md border p-2 "
              : "hidden"
          }`}
        >
          <div
            className="z-50  w-full
         "
          >
            {navigationData.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-white bg-black dark:bg-white dark:text-black"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </a>
            ))}

            <div className="flex flex-col gap-x-4 mx-3 gap-y-2">
              <Link href={loginPath}>
                <Button
                  variant="outline"
                  className="border rounded-md py-1 w-full"
                >
                  Login
                </Button>
              </Link>

              <Link href={signupPath}>
                <Button
                  variant="secondary"
                  className="border rounded-md py-1 w-full"
                >
                  SignUp
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderRoundedWeb2;
