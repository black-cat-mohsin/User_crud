import React from "react";
import styles from "./Login.module.css";
import BasicInput from "../../components/input-fields/BasicInput";
import AuthLayout from "../../layouts/auth-layout";

export default function Login() {
  return (
    <AuthLayout>
      <div className={styles.loginContainer}>
        <div className={styles.loginContainer__title}>
          Login To Your Account
        </div>
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
            Not Registered? <button>Create an account</button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
