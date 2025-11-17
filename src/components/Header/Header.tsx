// src/components/Header/Header.tsx

// Step 1: Import 'Link' and 'useLocation' from react-router-dom
import { Link, useLocation } from "react-router-dom";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import InfoIcon from "../Icons/InfoIcon";
import styles from "./Header.module.css";

// Step 2: Create a data structure for our navigation links for easier mapping
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact Us" },
];

const Header = () => {
  // Step 3: Get the current location object, which contains the pathname
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className={styles.header}>
      {/* Top Bar (remains unchanged) */}
      <div className={styles.topBar}>
        {/* ... top bar content ... */}
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <PhoneIcon />
              <span>+234 818 5079 845</span>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.infoItem}>
              <MailIcon />
              <span>hello@asotstudios.com</span>
            </div>
          </div>
          <div className={styles.shippingInfo}>
            <span>Orders of N200K+ Get Free Delivery</span>
            <InfoIcon />
          </div>
        </div>
      </div>

      {/* Main Navigation (UPDATED) */}
      <nav className={styles.mainNav}>
        <div className={styles.container}>
          <Logo />
          <div className={styles.navLinks}>
            <ul>
              {/* Step 4: Map over the navLinks array to generate links dynamically */}
              {navLinks.map((link) => (
                <li key={link.path}>
                  {/* Use the 'Link' component instead of 'a' */}
                  <Link
                    to={link.path}
                    // Conditionally apply the 'active' class
                    className={currentPath === link.path ? styles.active : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button onClick={() => alert("Quote button clicked!")}>
            Get A Quote
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
