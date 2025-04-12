import React from "react";
import styles from "./Login.module.css";
import BasicInput from "../../components/input-fields/BasicInput";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainer__title}>Login To Your Account</div>
      <div className={styles.loginContainer__inputFields}>
        <BasicInput name="Email" type="email" placeholder="Enter your name" />
        <BasicInput
          name="Password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className={styles.loginContainer__loginBtn_div}>
        <button className={styles.btn}>LOGIN</button>
        <div className={styles.navigate_to_sign_up}>
          Not Registered?
          <Link to="/signup" className={styles.link}>
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
