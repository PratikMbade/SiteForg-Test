import { CTACard } from "@/components/(homepage)/cta-section";
import { MarqueeDemoVertical } from "@/components/(homepage)/customer-reviews-moving-cards";
import FAQ1 from "@/components/(homepage)/faq";
import { FeaturesSectionGrid } from "@/components/(homepage)/feature-grid";
import Footer1 from "@/components/(homepage)/footer";
import { BentoDemo } from "@/components/(homepage)/grid";
import HeroProduct from "@/components/(homepage)/hero-section";
import HeroSaaS from "@/components/(homepage)/hero-section";
import { InfiniteMovingCardsDemo } from "@/components/(homepage)/infinite-card-scroll";
import { Pricing1 } from "@/components/(homepage)/pricing";
import { FeaturesSectionDemo } from "@/components/(homepage)/problem-info-cards";
import { FeaturesToggle } from "@/components/(homepage)/toggle-feature";
import ClientTweetCard from "@/components/(homepage)/tweet-client";
import HeaderSquareWeb2 from "@/components/global/Navbar";

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
