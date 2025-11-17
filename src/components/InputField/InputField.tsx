// src/components/InputField/InputField.tsx
import React from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string; // e.g., 'text', 'email', 'tel'
  as?: "input" | "textarea"; // To switch between input and textarea
}

const InputField = ({
  label,
  placeholder,
  type = "text",
  as = "input",
}: InputFieldProps) => {
  const [value, setValue] = React.useState("");

  const commonProps = {
    className: styles.input,
    placeholder: placeholder,
    value: value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    required: true,
  };

  return (
    <div className={styles.fieldWrapper}>
      <label className={styles.label}>{label}</label>
      {as === "textarea" ? (
        <textarea {...commonProps} rows={5} />
      ) : (
        <input {...commonProps} type={type} />
      )}
    </div>
  );
};

export default InputField;
