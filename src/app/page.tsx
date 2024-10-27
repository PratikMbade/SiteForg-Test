import { CTACard } from "@/components/(homepage)/cta-section";
import { MarqueeDemoVertical } from "@/components/(homepage)/customer-reviews-moving-cards";
import FAQ1 from "@/components/(homepage)/faq";
import Footer1 from "@/components/(homepage)/footer";
import { BentoDemo } from "@/components/(homepage)/grid";
import HeroProduct from "@/components/(homepage)/hero-section";


import { Pricing1 } from "@/components/(homepage)/pricing";

import { FeaturesToggle } from "@/components/(homepage)/toggle-feature";


export default function Home() {
  return (
    <main className="">
      <HeroProduct
        shinyText={"Introducing Siteforg 🛠️"}
        subHeading={
          " Bring your ideas to life with our easy-to-use website builder and AI-powered image & video generator. Fast, beautiful, and personalized."
        }
        getStartPagePath={""}
      />
      <FeaturesToggle />
      <Pricing1
        mainHeading={"Simple pricing for advanced people"}
        subHeading={""}
      />

      <BentoDemo />

      <MarqueeDemoVertical />

      {/* <ClientTweetCard id="1668408059125702661" className="shadow-2xl"/> */}

      <FAQ1 />

      

      <CTACard />

      <Footer1 />
    </main>
  );
}
