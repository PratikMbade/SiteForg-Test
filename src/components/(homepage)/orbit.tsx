import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative  flex h-[400px] lg:h-[600px] w-80 lg:w-[600px] flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        git clone build-fast
      </span>

      <div className="pointer-events-none absolute border-none bg-none  blur-3xl rounded-full top-[40%]   lg:left-[40%]  bg-orange-700 h-28 w-28  lg:hidden  "/>


       <div className="pointer-events-none absolute border-none bg-none  blur-3xl rounded-full top-[20%] lg:top-[40%] left-1/4 lg:left-[40%]  bg-orange-700 h-52 w-52 hidden lg:block  "/>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={60}
        delay={30}
        radius={50}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={60}
        delay={60}

        radius={50}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[10px] border-none bg-transparent"
        radius={150}
        duration={60}
        delay={30}

        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[70px] border-none bg-transparent"
        radius={100}
        duration={60}
        delay={50}
        
      >
        <Icons.gitHub />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[70px] border-none bg-transparent"
        radius={150}
        duration={60}
        delay={60}
        reverse
      >
        <Icons.auth />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
  <Image
  src="/nextjs.jpg"
  alt="next_image"
  height={400}
  width={400}
  
  />
  ),
  notion: () => (
    <Image
    src="/Stripe-logo.png"
    alt="next_image"
    height={600}
    width={600}
    
    />
  ),
  openai: () => (
   <div>
     <Image
    src="/Tailwind-Logo.png"
    alt="next_image"
    height={600}
    width={600}
    
    />
    <p>Tailwind</p>
    
   </div>
  ),
  googleDrive: () => (
    <div>
    <Image
   src="/Tailwind-Logo.png"
   alt="next_image"
   height={600}
   width={600}
   
   />
   <p className="font-bold">Tailwind</p>
   
  </div>
  ),
  whatsapp: () => (
    <div>
    <Image
   src="/web3-Logo.png"
   alt="next_image"
   height={600}
   width={600}
   
   />
   
  </div>
  ),
  auth: () => (
    <div>
    <Image
   src="/nextjs-auth.webp"
   alt="next_image"
   height={600}
   width={600}
   
   />
   
  </div>
  ),
};



