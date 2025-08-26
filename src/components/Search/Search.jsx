import React from "react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.input}
      />
      <button className={styles.btn}>🔍</button>
    </div>
  );
}
