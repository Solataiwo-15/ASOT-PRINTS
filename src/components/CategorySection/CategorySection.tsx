// src/components/Category-Section/CategorySection.tsx
import React from "react";
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
            // *** THIS IS THE UPDATED PART ***
            // We now render the tag and the icon for every single category
            // without any conditions.
            <React.Fragment key={category}>
              <button className={styles.categoryTag}>{category}</button>
              <SparkleIcon />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
