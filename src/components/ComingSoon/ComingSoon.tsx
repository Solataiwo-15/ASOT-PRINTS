// src/components/ComingSoon/ComingSoon.tsx
import { Link } from "react-router-dom";
import styles from "./ComingSoon.module.css";
import PackageIcon from "../Icons/PackageIcon";
import Button from "../Button/Button";

const ComingSoon = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PackageIcon className={styles.icon} />
        <h1 className={styles.title}>Our Products Are Coming Soon!</h1>
        <p className={styles.subtitle}>
          We are working hard to prepare a showcase of our best products.
          <br />
          Stay tuned for our exciting launch.
        </p>
        {/* The button is wrapped in a Link to navigate without a page refresh */}
        <Link to="/">
          <Button onClick={() => {}}>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
