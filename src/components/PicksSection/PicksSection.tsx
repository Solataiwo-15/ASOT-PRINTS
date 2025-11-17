// src/components/PicksSection/PicksSection.tsx
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./PicksSection.module.css";

// Import images
import imgShirts from "../../assets/picks-shirts.png";
import imgCards from "../../assets/picks-cards.png";
import imgStationary from "../../assets/picks-stationary.png";
import imgHats from "../../assets/picks-hats.png";
import imgStickers from "../../assets/picks-stickers.png";

const picksData = [
  {
    imageSrc: imgShirts,
    title: "T-shirts",
    backgroundColor: "#E0E0E0",
  },
  {
    imageSrc: imgCards,
    title: "Business Cards",
    backgroundColor: "#E0E0E0",
    discount: "15% off",
  },
  {
    imageSrc: imgStationary,
    title: "Stationary",
    backgroundColor: "#D1E4FF",
  },
  {
    imageSrc: imgHats,
    title: "Hats",
    backgroundColor: "#FFD700",
    discount: "30% off",
  },
  {
    imageSrc: imgStickers,
    title: "Stickers",
    backgroundColor: "#E0E0E0",
  },
];

const PicksSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Asot Picks :</h2>
            <p className={styles.subtitle}>
              Popular Product. Unbeatable Value.
            </p>
          </div>
          <Button onClick={() => alert("See All clicked!")}>See All</Button>
        </div>
        <div className={styles.grid}>
          {picksData.map((pick) => (
            <ProductCard
              key={pick.title}
              imageSrc={pick.imageSrc}
              title={pick.title}
              backgroundColor={pick.backgroundColor}
              discount={pick.discount} // Pass the optional discount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PicksSection;
