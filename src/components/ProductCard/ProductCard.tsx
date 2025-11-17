// src/components/ProductCard/ProductCard.tsx
import ArrowRightSimpleIcon from "../Icons/ArrowRightSimpleIcon.svg";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  backgroundColor: string;
  discount?: string; // This is optional
}

const ProductCard = ({
  imageSrc,
  title,
  backgroundColor,
  discount,
}: ProductCardProps) => {
  return (
    <a href="#" className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={imageSrc} alt={title} />
        {/* Conditionally render the discount badge only if a discount is provided */}
        {discount && <div className={styles.discountBadge}>{discount}</div>}
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <img src={ArrowRightSimpleIcon} alt="ArrowRight" />
      </div>
    </a>
  );
};

export default ProductCard;
