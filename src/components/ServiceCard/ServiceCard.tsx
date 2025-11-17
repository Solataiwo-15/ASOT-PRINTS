// src/components/ServiceCard/ServiceCard.tsx
import ArrowRight from "../../assets/Arrow 1.svg";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard = ({ imageSrc, title, description }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href="#" className={styles.learnMoreLink}>
        <span>Learn More</span>
        <img src={ArrowRight} alt="ArrowRight" />
      </a>
    </div>
  );
};

export default ServiceCard;
