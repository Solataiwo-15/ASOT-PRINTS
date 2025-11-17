// src/components/Logo/Logo.tsx
import logoSrc from "../../assets/Logo_Asot.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logoSrc} alt="ASOT company logo" />
    </a>
  );
};

export default Logo;
