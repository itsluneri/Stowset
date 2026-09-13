import type { InputHTMLAttributes } from "react";
import styles from "./input-field.module.css";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export function InputField({ label, name, ...props }: InputFieldProps) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} id={name} name={name} required {...props} />
    </label>
  );
}
