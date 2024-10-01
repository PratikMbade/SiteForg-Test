import { FeaturesSectionGrid } from "@/components/(homepage)/feature-grid";
import { InfiniteMovingCardsDemo } from "@/components/(homepage)/infinite-card-scroll";
import { FeaturesSectionDemo } from "@/components/(homepage)/problem-info-cards";
import { HeroScrollDemo } from "@/components/(homepage)/scroll-tab";
import { ModeToggle } from "@/components/Buttons/Themetoggle";
import { Hero } from "@/components/global/Hero";
import { Navbar } from "@/components/global/Navbar";
import Image from "next/image";
import BlocksPage from "./system/page";

export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center justify-between p-24 dark:bg-black">
      <Navbar/>
      <Hero/>
      <HeroScrollDemo/>
      <FeaturesSectionDemo/>
      <FeaturesSectionGrid/>
      <InfiniteMovingCardsDemo/>
    </main>
  );
}
