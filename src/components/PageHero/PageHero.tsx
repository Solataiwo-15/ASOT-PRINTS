// src/components/PageHero/PageHero.tsx
import styles from "./PageHero.module.css";
import pageHeroBg from "../../assets/page-hero-bg.png"; // The new background image

interface PageHeroProps {
  title: string;
}

const PageHero = ({ title }: PageHeroProps) => {
  return (
    // We can directly apply the background image with an inline style
    // for easier reuse, or keep it in the CSS module. Let's do it here.
    <section
      className={styles.pageHero}
      style={{ backgroundImage: `url(${pageHeroBg})` }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>
          Bring your Ideas to Life with <br /> High-Quality Prints
        </p>
      </div>
    </section>
  );
};

export default PageHero;
