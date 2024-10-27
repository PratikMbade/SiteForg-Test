import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";
import { OrbitingCirclesDemo } from './orbit';
import { RainbowButton } from "../ui/rainbow-button";
import { AnimatedShinyTextDemo } from "../(texts)/animated-shiny-text";
import {  AvatarCirclesDemo } from "./review-tooltip";
import { AnimatedGradientTextDemo } from "../ui/animated-gradient-text";

interface HeroSaaSTypes {
  shinyText: string;
  subHeading: string;
  getStartPagePath: string;
  productImage?: string;
}

const HeroProduct = ({
  shinyText,

  subHeading,
  getStartPagePath,
  productImage,
}: HeroSaaSTypes) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  place-items-center lg:py-10 lg:mx-48">

      <div className="flex flex-col items-center justify-center  order-2 lg:order-1 my-4">
        <div className="hidden lg:block">
       <AnimatedGradientTextDemo/>
        </div>

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  "></div>
        <div className="mx-5  flex items-center justify-center flex-col">
          <p className="text-3xl sm:text-7xl max-w-full font-extrabold relative z-10 bg-clip-text  dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 pt-4 lg:max-w-4xl text-center drop-shadow-xl">
          Websites made <span className="text-3xl sm:text-7xl font-extrabold text-orange-700">effortlessly</span> and launched in days
          </p>
          <p className="text-sm sm:text-xl font-medium relative z-10 bg-clip-text  dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 py-4 max-w-xl text-center opacity-75">
            {subHeading}
          </p>
        </div>

        <div>
        <AvatarCirclesDemo/>

        </div>


        <RainbowButton id="Feature"><p className="text-white dark:text-black">Start Building</p></RainbowButton>
      </div>

      <div className="h-auto    relative flex flex-col items-center justify-center z-10 order-1 lg:order-2">
        <div className=" lg:hidden">
        <AnimatedGradientTextDemo/>

        </div>
        <OrbitingCirclesDemo/>
      </div>

    </div>
  );
};

export default HeroProduct;
