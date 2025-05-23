import React from "react";
import styles from "./SignUp.module.css";
import BasicInput from "../../components/input-fields/BasicInput";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__title}> Create An Account</div>
        <div className={styles.container__inputFieldsDiv}>
          <BasicInput name="Name" type="text" placeholder="Enter your name" />
          <BasicInput
            name="Designation"
            type="text"
            placeholder="Enter your designation"
          />
          <BasicInput
            name="Email"
            type="email"
            placeholder="Enter your email address"
          />
          <BasicInput
            name="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.container__signUpBtn_div}>
          <button className={styles.btn}>CREATE</button>
          <div className={styles.navigate_to_login}>
            Already have an account?
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
