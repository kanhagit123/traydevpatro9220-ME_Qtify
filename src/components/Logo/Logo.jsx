// src/components/Logo/Logo.jsx
import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <img src="/logo.png" alt="QTify Logo" className={styles.logo} />
  );
};

export default Logo;
