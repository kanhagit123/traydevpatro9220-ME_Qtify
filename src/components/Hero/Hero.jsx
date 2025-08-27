// src/components/Hero/Hero.jsx
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>

      <div className={styles.image}>
        {/* ✅ Headphones image from public folder */}
        <img src="/hero.png" alt="QTify Hero" />
      </div>
    </div>
  );
}
