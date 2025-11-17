// src/pages/HomePage.tsx
import HeroSection from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection/CategorySection";
import TrustedPartnerSection from "../components/TrustedPartnerSection/TrustedPartnerSection";
import ExcellenceSection from "../components/ExcellenceSection/ExcellenceSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import StatsSection from "../components/StatsSection/StatsSection";
import PicksSection from "../components/PicksSection/PicksSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import CtaSection from "../components/CtaSection/CtaSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <TrustedPartnerSection />
      <ExcellenceSection />
      <ServicesSection />
      <StatsSection />
      <PicksSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
