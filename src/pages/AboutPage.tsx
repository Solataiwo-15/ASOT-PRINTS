// src/pages/AboutPage.tsx
import React from "react"; // Import React to use JSX fragments and <br />
import PageHero from "../components/PageHero/PageHero";
import ContentSection from "../components/ContentSection/ContentSection";
import ExcellenceSection from "../components/ExcellenceSection/ExcellenceSection";
import StatsSection from "../components/StatsSection/StatsSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import CtaSection from "../components/CtaSection/CtaSection";

// Import the image for the content section
import aboutExperienceImage from "../assets/service-bag.png";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

const AboutPage = () => {
  return (
    <>
      <PageHero title="About Us" />

      <ContentSection
        tag="ABOUT US"
        title={
          <>
            Experience The Power <br /> of Digital Printing
          </>
        }
        description="Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus. Vitae nulla in sollicitudin augue tincidunt lobortis."
        imageSrc={aboutExperienceImage}
      />

      <ExcellenceSection />
      <WelcomeSection />
      <StatsSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
};

export default AboutPage;
