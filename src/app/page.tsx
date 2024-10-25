
import { MarqueeDemoVertical } from "@/components/(homepage)/customer-reviews-moving-cards";
import { FeaturesSectionGrid } from "@/components/(homepage)/feature-grid";
import Footer1 from "@/components/(homepage)/footer";
import { BentoDemo } from "@/components/(homepage)/grid";
import HeroProduct from "@/components/(homepage)/hero-section";
import HeroSaaS from "@/components/(homepage)/hero-section";
import { InfiniteMovingCardsDemo } from "@/components/(homepage)/infinite-card-scroll";
import { Pricing1 } from "@/components/(homepage)/pricing";
import { FeaturesSectionDemo } from "@/components/(homepage)/problem-info-cards";
import { FeaturesToggle } from "@/components/(homepage)/toggle-feature";
import HeaderSquareWeb2 from "@/components/global/Navbar";





export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center justify-between dark:bg-neutral-900">

      <HeroProduct shinyText={"Introducing Siteforg 🛠️"}  subHeading={" Bring your ideas to life with our easy-to-use website builder and AI-powered image & video generator. Fast, beautiful, and personalized."} getStartPagePath={""}/>
       <FeaturesToggle/>
      {/* <FeaturesSectionDemo/> */}
      {/* <FeaturesSectionGrid/> */}
      <Pricing1 mainHeading={"Simple pricing for advanced people"} subHeading={""}/>

      <BentoDemo/>

      <MarqueeDemoVertical/>
     
      <Footer1/>
    </main>
  );
}
