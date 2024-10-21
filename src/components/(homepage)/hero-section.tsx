import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

interface HeroSaaSTypes{

  shinyText:string;
  mainHeading:string;
  subHeading:string;
  getStartPagePath:string;
  productImage?:string;

}

const HeroSaaS = ({shinyText,mainHeading,subHeading,getStartPagePath,productImage}:HeroSaaSTypes) => {
  return (
    <div className="h-auto mt-24 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center z-10">
      <div className="">
        <button className="bg-slate-300 dark:bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-white dark:bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 text-black dark:text-white ">
            <span>{shinyText}</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-sky-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mx-5">
        <p className="text-3xl sm:text-8xl font-bold relative z-10 bg-clip-text  dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 pt-4 max-w-7xl text-center">
          {mainHeading}
        </p>
        <p className="text-sm sm:text-xl font-medium relative z-10 bg-clip-text  dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 py-4 max-w-7xl text-center opacity-75">
        {subHeading}
        </p>
      </div>

      <button className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Get Started
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>


      <div className="flex mt-10 lg:mt-10 flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
           
          </>
        }
      >
        <Image
          src={`/tab-scroll-image.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
       </div>
    </div>
  );
};

export default HeroSaaS;