// src/pages/ServicesPage.tsx
import PageHero from "../components/PageHero/PageHero";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import CtaSection from "../components/CtaSection/CtaSection";

const ServicesPage = () => {
  return (
    <>
      <PageHero title="Services" />
      <ServicesSection />
      <CtaSection />
    </>
  );
};

export default ServicesPage;
