// src/components/ExcellenceSection/ExcellenceSection.tsx
import FeatureItem from "../FeatureItem/FeatureItem";
import styles from "./ExcellenceSection.module.css";
import printerImage from "../../assets/excellence-printer.png";

const ExcellenceSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <span className={styles.tag}>WHY CHOOSE US</span>
          <h2 className={styles.title}>
            Experience Excellence <br /> Service
          </h2>
          <p className={styles.description}>
            At Asot, we are committed to providing our customers with an
            unparalleled experience that exceeds expectations. Our team of
            dedicated professionals is passionate about delivering exceptional
            service, ensuring that your needs are met with the utmost care and
            attention.
          </p>
          <div className={styles.featuresList}>
            <FeatureItem title="Uncompromising Quality">
              We prioritize quality by meticulously crafting our products and
              services. Cutting-edge technologies and strict quality control
              ensure you get the best value.
            </FeatureItem>
            <FeatureItem title="Extensive Range of Services">
              We cover all your needs with a wide range of services. From design
              to branding, our experts tackle any project, big or small, to make
              your vision a reality.
            </FeatureItem>
            <FeatureItem title="Personalized Approach">
              Your needs are our priority. We customize our services to
              perfectly match your goals, ensuring you get exactly what you
              want.
            </FeatureItem>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.videoPlayer}>
            <img
              src={printerImage}
              alt="Industrial printing machine in action"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
