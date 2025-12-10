import SparkleIcon from "../Icons/SparkleIcon";
import styles from "./CategorySection.module.css";

const categories = [
  "BUSINESS CARD",
  "BROCHURE & FLYER",
  "POSTER & BANNER",
  "CUSTOM INVITATION",
  "BRANDING",
  "CATALOG & BOOKLET",
  "PACKAGING BAGS",
  "APPAREL PRINTING",
  "COMPANY PACKAGE",
];

const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Category</h2>
        <div className={styles.tagsContainer}>
          {categories.map((category) => (
            // This wrapper for each item is crucial
            <div className={styles.tagItem} key={category}>
              <button className={styles.categoryTag}>{category}</button>
              <SparkleIcon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
