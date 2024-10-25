import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[700px] w-[700px] flex-col items-center justify-center overflow-hidden rounded-lg d ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        git clone build-fast
      </span>

       <div className="pointer-events-none absolute inset-0 blur-3xl rounded-full top-[40%] left-[40%] opacity-70 bg-orange-700 h-52 w-52  "/>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={30}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[70px] border-none bg-transparent"
        radius={140}
        duration={15}
        delay={50}
        
      >
        <Icons.gitHub />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[70px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
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



