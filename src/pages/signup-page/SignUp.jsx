import React from "react";
import AuthLayout from "../../layouts/auth-layout";
import styles from "./SignUp.module.css";
import BasicInput from "../../components/input-fields/BasicInput";

export default function SignUp() {
  return (
    <>
      <AuthLayout>
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
              Already have an account? <button>Login</button>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
