// src/components/TestimonialSection/TestimonialSection.tsx (Updated)
import styles from "./TestimonialSection.module.css";
import testimonialImage from "../../assets/testimonial-composition.png";
import quoteIcon from "../../assets/quote-icon.png";

const TestimonialSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column (Image) - This is correct for desktop */}
        <div className={styles.leftColumn}>
          <img
            src={testimonialImage}
            alt="Abstract composition for testimonial"
            className={styles.compositionImage}
          />
        </div>

        {/* Right Column (Content) - This is correct for desktop */}
        <div className={styles.rightColumn}>
          <div className={styles.header}>
            <h2 className={styles.title}>Testimonial</h2>
            <img
              src={quoteIcon}
              alt="Quote icon"
              className={styles.quoteIcon}
            />
          </div>

          {/* --- THIS IS THE NEW WRAPPER for the mobile card --- */}
          <div className={styles.quoteCard}>
            <h3 className={styles.subtitle}>High-Quality Prints</h3>
            <p className={styles.testimonialText}>
              The printing services provided by this company delivered
              high-quality prints that exceeded my expectations. The colors were
              vibrant, and the details were sharp. I highly recommend their
              services.
            </p>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>Emily Johnson, </span>
              <span className={styles.authorRole}>Graphic Designer</span>
            </div>
          </div>

          {/* Controls are now outside the new card wrapper */}
          <div className={styles.controls}>
            <div className={`${styles.dot} ${styles.active}`}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
