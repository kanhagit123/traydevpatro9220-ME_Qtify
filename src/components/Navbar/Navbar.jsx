import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left: Logo */}
      <Logo />

      {/* Center: Search bar */}
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search an album of your choice"
          className={styles.searchInput}
        />
        <button className={styles.searchBtn}>
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>

      {/* Right: Feedback button */}
      <button className={styles.feedbackBtn}>Give Feedback</button>
    </nav>
  );
};

export default Navbar;
