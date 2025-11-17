// src/components/ServicesSection/ServicesSection.tsx
import SolutionCard from "../SolutionCard/SolutionCard";
import styles from "./ServicesSection.module.css";

// Import all the images
import imgPackaging from "../../assets/solution-packaging.png";
import imgPromotional from "../../assets/solution-promotional.png";
import imgMarketing from "../../assets/solution-marketing.png";
import imgBanners from "../../assets/solution-banners.png";
import imgBusiness from "../../assets/solution-business.png";
import imgSpecial from "../../assets/solution-special.png";

// Data for our cards
const servicesData = [
  {
    imageSrc: imgPackaging,
    title: "Packaging Solutions:",
    items: [
      "Custom Boxes",
      "Custom Packaging",
      "Labels and Stickers",
      "Tags and Hangings",
    ],
  },
  {
    imageSrc: imgPromotional,
    title: "Promotional Items:",
    items: [
      "Pens and Stationery",
      "Mugs and Drinkware",
      "Keychains and Accessories",
      "Custom Apparel",
    ],
  },
  {
    imageSrc: imgMarketing,
    title: "Marketing Materials:",
    items: [
      "Brochures and Flyers",
      "Postcards and Mailers",
      "Door Hangers",
      "Catalogs and Booklets",
    ],
  },
  {
    imageSrc: imgBanners,
    title: "Banners and Signage:",
    items: ["Vinyl Banners", "Retractable Banners", "Posters", "Yard Signs"],
  },
  {
    imageSrc: imgBusiness,
    title: "Business Essentials:",
    items: [
      "Business Cards",
      "Letterheads and Envelopes",
      "Notepads",
      "Presentation Folders",
    ],
  },
  {
    imageSrc: imgSpecial,
    title: "Special Occasions:",
    items: ["Invitations and Greeting Cards", "Event Tickets", "Announcements"],
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>Our Services</span>
        <h2 className={styles.title}>
          Your One-Stop Printing Solution – <br /> Explore Our Services
        </h2>
        <p className={styles.description}>
          We offer a complete range of printing services, from business cards to
          banners. State-of-the-art technology and expertise ensure top quality
          results for all your printing needs.
        </p>
        <div className={styles.grid}>
          {servicesData.map((service) => (
            <SolutionCard
              key={service.title}
              imageSrc={service.imageSrc}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
