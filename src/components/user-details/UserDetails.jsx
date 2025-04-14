import React from "react";
import styles from "./UserDetails.module.css";

export default function UserDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.left_div}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cat Details"
        />
      </div>
      <div className={styles.right_div}>
        <div className={styles.details_wrapper}>
          <div className={styles.tiltle}> Mohsin Al- Mamun</div>
          <div className={styles.designation}>Software Developer</div>
          <div className={styles.details}>
            Mohsin Al Mamun is a passionate Software Developer with a strong
            focus on frontend technologies. He is proficient in JavaScript,
            React, HTML, and CSS, and enjoys building responsive, user-friendly
            interfaces. Alongside his frontend expertise, Mohsin has a
            foundational understanding of Node.js and is actively deepening his
            knowledge in backend development to become a more versatile
            full-stack developer. Driven by curiosity and continuous learning,
            he is committed to growing his skills and delivering clean,
            efficient code.
          </div>
        </div>
      </div>
    </div>
  );
}
