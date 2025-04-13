import React from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.content_div}>
        <Outlet />
      </div>
    </div>
  );
}
