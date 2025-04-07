import React from "react";
import styles from "./BasicInput.module.css";

export default function BasicInput({ name, type, placeholder }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{name}</label>
      <input
        type={type}
        className={styles.inputField}
        placeholder={placeholder}
      />
    </div>
  );
}
