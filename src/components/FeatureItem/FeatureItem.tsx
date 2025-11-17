// src/components/FeatureItem/FeatureItem.tsx
import ThumbsUpIcon from "../Icons/ThumbsUpIcon";
import styles from "./FeatureItem.module.css";

interface FeatureItemProps {
  title: string;
  children: React.ReactNode;
}

const FeatureItem = ({ title, children }: FeatureItemProps) => {
  return (
    <div className={styles.feature}>
      <div className={styles.iconContainer}>
        <ThumbsUpIcon />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{children}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
