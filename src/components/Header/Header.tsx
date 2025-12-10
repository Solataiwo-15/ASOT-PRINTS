// src/components/Header/Header.tsx

// Step 1: Import 'Link' and 'useLocation' from react-router-dom
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import InfoIcon from "../Icons/InfoIcon";
import styles from "./Header.module.css";
import HamburgerIcon from "../Icons/HamburgerIcon";
import CloseIcon from "../Icons/CloseIcon";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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

      {/* Main Navigation (CORRECTED STRUCTURE) */}
      <nav className={styles.mainNav}>
        <div className={styles.container}>
          {/* THIS IS THE CHANGE: Add a wrapper div */}
          <div className={styles.headerLogo}>
            <Logo />
          </div>

          {/* This wrapper now contains BOTH mobile and desktop navs */}
          <div className={styles.navWrapper}>
            {/* Hamburger Button (Mobile) */}
            <button className={styles.hamburgerButton} onClick={toggleMenu}>
              <HamburgerIcon />
            </button>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={currentPath === link.path ? styles.active : ""}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* THIS IS THE CHANGE: Add a wrapper div */}
          <div className={styles.headerButton}>
            <Button onClick={() => alert("Quote button clicked!")}>
              Get A Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel (no changes here) */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.isOpen : ""}`}
      >
        <button className={styles.closeButton} onClick={toggleMenu}>
          <CloseIcon />
        </button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={currentPath === link.path ? styles.active : ""}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
