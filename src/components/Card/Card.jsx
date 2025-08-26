import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

export default function Card({ data, type }) {
  // type = "albums" => shows Follows
  // type = "songs"  => shows Likes

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles.bottom}>
        <p className={styles.title}>{data.title}</p>
        <Chip
          label={`${type === "albums" ? data.follows : data.likes} ${
            type === "albums" ? "Follows" : "Likes"
          }`}
          className={styles.chip}
        />
      </div>
    </div>
  );
}
