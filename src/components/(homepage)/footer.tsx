import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";


const links = [
  {
    category: "Information",
    items: ["Pricing", "Blogs", "Contact"],
  },
  {
    category: "Policies",
    items: ["Privacy Policy", "Terms of Service", "Refund Policy"],
  },
  {
    category: "Follow Us On",
    items: [
      "Twitter",
      "Instagram",
      "Facebook",
      "Youtube",
      // Add more icons as needed...
    ],
  },
];

const Footer1 = () => {
  return (
    <>
      <footer className="relative z-10 bg-neutral-300 border-t border-t-neutral-600  w-full dark:bg-neutral-900    flex flex-col items-center justify-center mt-10 ">
        <div className=" flex flex-col items-center justify-between  lg:flex-row    w-3/4 mt-10 text-neutral-900 dark:text-neutral-400 ">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 flex  max-w-[160px] ">
                <div className="flex items-center justify-center">
                  <p className="text-4xl font-extrabold">Site Forg</p>
                </div>
              </Link>
             
           
            </div>
          </div>

          <div className="flex w-[90%] lg:w-fit  gap-x-7">
        

            <div className="flex gap-x-8 ">
                {links.slice(0, 3).map((linksection, index) => (
                  <div className="flex ">
                    <ul className="flex  flex-col lg:mx-10 gap-y-3  lg:gap-x-4 lg:gap-y-4 text-sm">
                        {
                            linksection.items.map((item)=>(
                                <li>{item}</li>

                            ))
                        }
                    </ul>
                  </div>
                ))}
              
            </div>

       
          </div>
        </div>

        <div className="h-[20rem] flex items-center justify-center  w-full">
          <TextHoverEffect text="SiteForg" />
        </div>

        <div className="my-4">
        Siteforg Copyright © 2024 - All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer1;

