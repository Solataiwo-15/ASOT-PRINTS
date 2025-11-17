// src/components/HeroSection/HeroSection.tsx
import Button from "../Button/Button";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Side: Text Content */}
        <div className={styles.heroText}>
          <h1 className={styles.headline}>
            Show Up, <br />
            Stand Out!
          </h1>
          <p className={styles.subheadline}>
            Bring your Ideas to Life with High-Quality Prints
          </p>
          <p className={styles.description}>
            Ready to elevate your brand? <br /> Get a free quote on your next
            printing project.
          </p>
          <Button onClick={() => alert("Hero Get a Quote clicked!")}>
            Get a Quote
          </Button>
        </div>

        {/* Right Side: Simple Image Wrapper */}
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Examples of high-quality prints" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
