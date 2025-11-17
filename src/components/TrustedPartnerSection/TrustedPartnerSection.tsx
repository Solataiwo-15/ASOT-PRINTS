// src/components/TrustedPartnerSection/TrustedPartnerSection.tsx
import Button from "../Button/Button";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./TrustedPartnerSection.module.css";

// Import the images
import imgBag from "../../assets/service-bag.png";
import imgShirts from "../../assets/service-shirts.png";
import imgCards from "../../assets/service-cards.png";

const TrustedPartnerSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* === HEADER SECTION (CORRECTED STRUCTURE) === */}
        <div className={styles.header}>
          {/* Top Row: Full Width */}
          <span className={styles.tag}>ABOUT US</span>

          {/* Bottom Row: Two Columns */}
          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Your Trusted Partner for Superior Printing Services
            </h2>
            <div className={styles.headerDescription}>
              <p>
                We are committed to providing our customers with the highest
                quality printing services at competitive prices.
              </p>
              <Button onClick={() => alert("Learn More clicked!")}>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* --- Cards Grid --- */}
        <div className={styles.cardGrid}>
          {/* ... (ServiceCard components are unchanged) ... */}
          <ServiceCard
            imageSrc={imgBag}
            title="High-Quality Printing"
            description="Ensuring 300 DPI images and utilizing professional services with high-end equipment and archival inks."
          />
          <ServiceCard
            imageSrc={imgShirts}
            title="Customization Options"
            description="Extensive customization empowers you to create a truly unique product."
          />
          <ServiceCard
            imageSrc={imgCards}
            title="Quick Turnaround Time"
            description="Explore rush printing options for speedy delivery with your tight deadlines."
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerSection;
