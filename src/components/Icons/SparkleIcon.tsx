// src/components/Icons/SparkleIcon.tsx
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#00A3FF" />
    <path
      d="M20 11L22.1436 17.8564L29 20L22.1436 22.1436L20 29L17.8564 22.1436L11 20L17.8564 17.8564L20 11Z"
      fill="white"
    />
  </svg>
);

export default SparkleIcon;
