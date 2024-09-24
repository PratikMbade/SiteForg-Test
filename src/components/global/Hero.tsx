import React from "react";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { AnimatedGradientTextDemo } from "../(texts)/animated-gradient-text";
import { PlugZap } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="h-[50rem] w-full dark:bg-black  dark:bg-grid-small-white/[0.5]  relative flex flex-col items-center justify-center ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex   dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  "></div>
      <AnimatedGradientTextDemo />

      <p className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700  to-neutral-900 dark:from-neutral-200 dark:to-neutral-500 py-8 text-center ">
        Stunning UI, Seamless Auth, and Tailored
        <br />
        for Startups
      </p>

      <p className="mt-4 font-normal text-2xl text-neutral-900  dark:text-neutral-300 max-w-2xl text-center mx-auto opacity-65 ">
        Promotes the speed of launching a visually appealing and functional site
        for startups. Seamless UI, NextAuth, Prisma, and Tailwind at Your
        Fingertips.
      </p>

      <Button variant="default" className="z-20 rounded-[5px] mt-5"> <PlugZap/> Get Start Free</Button>


      

    </div>
    
  );
}
