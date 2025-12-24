import AboutMe from "../AboutMe";
import AboutMeModern from "../AboutMeModern";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
// Switch between modern and original components
import HeroSectionModern from "../HeroSectionModern";
import HeroMinimal from "../HeroMinimal";
import MyPortfolioModern from "../MyPortfolioModern";
import MyPortfolioClean from "../MyPortfolioClean";
// Original components as fallback
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import PoliticalSection from "../Political";
import MissionSection from "../mission";
import CoreValuesSection from "../core";
import YouTubeSection from "../youtube";

export default function Home() {
  // You can toggle between modern and original components
  const useModernUI = true; // Set to false to use original components

  return (
    <>
      {useModernUI ? <HeroMinimal /> : <HeroSection />}
      {useModernUI ? <AboutMeModern /> : <AboutMe />}
      {useModernUI ? <MyPortfolioModern /> : <MyPortfolio />}
      <ContactMe />
      <PoliticalSection />
      <MissionSection />
      <CoreValuesSection />
      <YouTubeSection />
      <Testimonial />
      <Footer />
    </>
  );
}
