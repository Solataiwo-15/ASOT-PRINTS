// src/components/Button/Button.tsx

import styles from "./Button.module.css";

// Define the types for our component's props using a TypeScript interface
interface ButtonProps {
  children: React.ReactNode; // The content inside the button (e.g., text)
  onClick: () => void; // The function to call when the button is clicked
  variant?: "primary"; // The style variant (we only have 'primary' for now)
  type?: "button" | "submit" | "reset"; // The button's type attribute
  disabled?: boolean; // Whether the button is disabled
}

const Button = ({
  children,
  onClick,
  variant = "primary", // Default to 'primary' if no variant is provided
  type = "button",
  disabled = false,
}: ButtonProps) => {
  // We can build the className string based on the props
  const classNames = `
    ${styles.btn}
    ${variant === "primary" ? styles.primary : ""}
  `;

  return (
    <button
      className={classNames}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
