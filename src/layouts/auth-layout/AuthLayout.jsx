import React from "react";
import { Outlet } from "react-router";
import styles from "./AuthLayout.module.css";

export default function AuthLayout({ children }) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authContainer__content}>
        <div className={styles.authContainer__left}>
          <div className={styles.authContainer__left_text_div}>
            Let's discuss on something cool together!!!
          </div>
        </div>
        <div className={styles.authContainer__right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
