// src/components/SolutionCard/SolutionCard.tsx
import styles from "./SolutionCard.module.css";

interface SolutionCardProps {
  imageSrc: string;
  title: string;
  items: string[];
}

const SolutionCard = ({ imageSrc, title, items }: SolutionCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} />
        <button className={styles.detailButton}>Detail</button>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.itemList}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SolutionCard;
