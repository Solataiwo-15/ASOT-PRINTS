// src/components/StatsSection/StatsSection.tsx
import Button from "../Button/Button";
import StatItem from "../StatItem/StatItem";
import styles from "./StatsSection.module.css";

const statsData = [
  { value: "5+", label: "Years of Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Diverse Product" },
  { value: "10K", label: "Printing Capacity" },
];

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* --- Upper Div --- */}
        <div className={styles.upperDiv}>
          {/* Upper-Left Div */}
          <div className={styles.upperLeft}>
            <span className={styles.tag}>Statistic</span>
            <h2 className={styles.title}>
              Asot <br className={styles.desktopOnlyBr} /> in Number
            </h2>
          </div>
          {/* Upper-Right Div */}
          <div className={styles.upperRight}>
            <p className={styles.description}>
              Odio at elit mauris neque nisl odio elementum viverra
              sollicitudin. Ante sed aliquam et duis eu mauris. Tristique
              quisque amet turpis sed interdum non sollicitudin vulputate mi.
              Interdum in et ut sed semper ornare fames.
            </p>
            <Button onClick={() => alert("Learn More clicked!")}>
              Learn More
            </Button>
          </div>
        </div>

        {/* --- Lower Div --- */}
        <div className={styles.lowerDiv}>
          {statsData.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
