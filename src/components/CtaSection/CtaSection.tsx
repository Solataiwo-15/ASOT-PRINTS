// src/components/CtaSection/CtaSection.tsx
import Button from "../Button/Button";
import styles from "./CtaSection.module.css";

const CtaSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Request Your Free Printing <br className={styles.desktopOnlyBr} />{" "}
          Sample!
        </h2>
        <p className={styles.subtitle}>
          See, Touch, and Feel the Excellence of Asot.
        </p>
        <Button onClick={() => alert("Request Now clicked!")}>
          Request Now!
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
