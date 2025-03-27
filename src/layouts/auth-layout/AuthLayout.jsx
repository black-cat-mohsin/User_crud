import React from "react";
import styles from "./AuthLayout.module.css";

export default function AuthLayout({ children }) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authContainer__content}>
        <div className={styles.authContainer__left}></div>
        <div className={styles.authContainer__right}>{children}</div>
      </div>
    </div>
  );
}
