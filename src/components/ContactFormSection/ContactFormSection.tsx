// src/components/ContactFormSection/ContactFormSection.tsx
import styles from "./ContactFormSection.module.css";
import pageHeroBg from "../../assets/page-hero-bg.png";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const ContactFormSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (This is a demo)");
  };

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${pageHeroBg})` }}
    >
      <div className={styles.overlay}></div>

      {/* NEW STRUCTURE: A full-width wrapper handles the two columns */}
      <div className={styles.contentWrapper}>
        {/* Left Column (Text) */}
        <div className={styles.textColumn}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Bring your Ideas to Life with High-Quality Prints
          </p>
        </div>

        {/* Right Column (Form) */}
        <div className={styles.formColumn}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Contact Us</h2>
            <div className={styles.inputGrid}>
              <InputField label="First Name" placeholder="Jane" />
              <InputField label="Last Name" placeholder="Danielle" />
              <InputField
                label="Email Address"
                placeholder="@gmail.com"
                type="email"
              />
              <InputField
                label="Phone Number"
                placeholder="0800 000 0000"
                type="tel"
              />
            </div>
            <InputField
              label="Message"
              placeholder="Type your message here"
              as="textarea"
            />
            <div className={styles.buttonWrapper}>
              <Button type="submit" onClick={() => {}}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
