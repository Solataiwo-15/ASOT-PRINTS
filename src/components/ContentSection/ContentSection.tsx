// src/components/ContentSection/ContentSection.tsx
import styles from "./ContentSection.module.css";

interface ContentSectionProps {
  tag: string;
  title: React.ReactNode; // Use React.ReactNode to allow <br /> tags
  description: string;
  imageSrc: string;
}

const ContentSection = ({
  tag,
  title,
  description,
  imageSrc,
}: ContentSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Image */}
        <div className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <img src={imageSrc} alt="Section image" />
          </div>
        </div>

        {/* Right Column: Text */}
        <div className={styles.textColumn}>
          <span className={styles.tag}>{tag}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
