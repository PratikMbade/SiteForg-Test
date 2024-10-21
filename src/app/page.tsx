import BlocksPage from "@/components/(docs)/(blocks)/block-main";
import HeroSection from "@/components/(docs)/(components)/hero2";
import { FeaturesSectionGrid } from "@/components/(homepage)/feature-grid";
import HeroSaaS from "@/components/(homepage)/hero-section";
import { InfiniteMovingCardsDemo } from "@/components/(homepage)/infinite-card-scroll";
import { FeaturesSectionDemo } from "@/components/(homepage)/problem-info-cards";
import { HeroScrollDemo } from "@/components/(homepage)/scroll-tab";
import { ModeToggle } from "@/components/Buttons/Themetoggle";
import { Hero } from "@/components/global/Hero";
import HeaderSquareWeb2 from "@/components/global/Navbar";
import Navbar, {  } from "@/components/global/Navbar";
import Image from "next/image";




export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center justify-between dark:bg-black">

      <HeaderSquareWeb2 title={""} navigationData={[]} loginPath={"login"} signupPath={"signup"}/>
      <HeroSaaS shinyText={"Introducing Siteforg 🛠️"} mainHeading={" Websites made effortlessly and launched in days"} subHeading={" Bring your ideas to life with our easy-to-use website builder and AI-powered image & video generator. Fast, beautiful, and personalized."} getStartPagePath={""}/>
      <FeaturesSectionDemo/>
      <FeaturesSectionGrid/>
      <InfiniteMovingCardsDemo/>

  
    </main>
  );
}
