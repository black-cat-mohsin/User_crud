import React from "react";
import styles from "./UserDetailsPage.module.css";
import UserDetails from "../../components/user-details";

export default function UserDetailsPage() {
  return (
    <div className={styles.container}>
      <UserDetails />
    </div>
  );
}
