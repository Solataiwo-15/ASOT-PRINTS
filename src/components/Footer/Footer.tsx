// src/components/Footer/Footer.tsx
import { useState } from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/logo-footer.svg";
import Button from "../Button/Button";

// *** STEP 1: Import the SVG files as assets ***
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import facebookIcon from "../../assets/facebook.svg";
import twitterXIcon from "../../assets/twitter-x.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* --- Main Footer Content --- */}
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <img
              src={footerLogo}
              alt="Asot Printing Agency"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Unlock Your Business’s Potential with Our Social Media Solutions
            </p>
            <nav className={styles.footerNav}>
              <a href="#">Overview</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Careers</a>
              <a href="#">Help</a>
              <a href="#">Privacy</a>
            </nav>
            {/* *** STEP 2: Use the imported SVGs in <img> tags *** */}
            <div className={styles.socialIcons}>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={twitterXIcon} alt="Twitter X" />
              </a>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <p className={styles.newsletterTitle}>
              Stay Up-to-Date with the Latest Social Media Strategies and
              Insights
            </p>
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" onClick={() => {}}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* --- Bottom Bar --- */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <span className={styles.copyright}>
            © 2025 Asot. All rights reserved.
          </span>
          <span className={styles.designedBy}>Designed by Asot</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
