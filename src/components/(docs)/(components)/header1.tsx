'use client'
import React, { useState } from "react";
import {  Menu, X } from 'lucide-react';
 
 
const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if menu is open
 
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
 <div className="bg-stone-900 h-40 rounded-md">


     <div className="border-b bg-black flex rounded-full   w-full  ">
        <div className="flex  items-center  w-full justify-between mx-10 mt-4 mb-3">
          <div>
            <p className="font-semibold text-2xl">StartUp</p>
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
                      ? " text-white"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-md font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
 

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="border-2 rounded-md border-slate-800 p-1">

              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
 

          <div className="hidden lg:block">
            <div className="flex gap-x-4">
              <button className="border px-6 text-lg rounded-full">Login</button>
              <button className="bg-white text-black px-6 text-lg rounded-full">SignUp</button>
            </div>
          </div>
        </div>
 
        {/* Mobile Menu Panel */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
               <a
                key={item.name}
 
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
             </a>
            ))}
 
 
            <div className="flex flex-col gap-x-4 mx-3 gap-y-2">
              <button className="border rounded-md ">Login</button>
              <button className="border rounded-md ">SignUp</button>
            </div>
 
          </div>
        </div>
      </div>
 </div>
 
  );
};
 
export default Header1;
 