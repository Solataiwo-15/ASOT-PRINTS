// src/components/WelcomeSection/WelcomeSection.tsx
import styles from "./WelcomeSection.module.css";
import printerTop from "../../assets/welcome-printer-top.png";
import printerBottom from "../../assets/welcome-printer-bottom.png";

const WelcomeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Images */}
        <div className={styles.leftColumn}>
          <img
            src={printerTop}
            alt="High-precision printing press"
            className={styles.image}
          />
          <img
            src={printerBottom}
            alt="Large format vinyl printer"
            className={styles.image}
          />
        </div>

        {/* Right Column: Text Content */}
        <div className={styles.rightColumn}>
          <span className={styles.tag}>Welcome</span>
          <h2 className={styles.title}>
            Welcome To <span className={styles.highlight}>Asot,</span>
            <br />
            Helping you find the best <br />
            Digital Printing Solutions.
          </h2>
          <div className={styles.description}>
            <p>
              We offer a complete range of printing services, from business
              cards to banners. State-of-the-art technology and expertise ensure
              top quality results for all your printing needs.
            </p>
            <p>
              We offer a complete range of printing services, from business
              cards to banners. State-of-the-art technology and expertise ensure
              top quality results for all your printing needs.
            </p>
            <p>
              We offer a complete range of printing services, from business
              cards to banners. State-of-the-art technology and expertise ensure
              top quality results for all your printing needs.
            </p>
          </div>
          <p className={styles.signature}>
            <strong>Taiwo A.O</strong> – Founder, C.E.O
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
