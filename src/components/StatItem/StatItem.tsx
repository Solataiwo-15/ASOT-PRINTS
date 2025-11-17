// src/components/StatItem/StatItem.tsx
import styles from "./StatItem.module.css";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className={styles.statItem}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default StatItem;
