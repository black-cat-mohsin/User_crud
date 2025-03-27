import React from "react";
import styles from "./Login.module.css";
import AuthLayout from "../../layouts/auth-layout";

export default function Login() {
  return (
    <AuthLayout>
      <div className={styles.loginContainer}>
        This is the bloody ligin page.
      </div>
    </AuthLayout>
  );
}
