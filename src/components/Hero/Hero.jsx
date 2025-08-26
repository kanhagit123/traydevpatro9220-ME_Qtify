import styles from "./Hero.module.css"; // ✅ ab module css use karenge

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>Experience the Best Music with QTify</h1>
        <p>
          Discover top albums, new releases, and trending songs all in one place.
        </p>
      </div>

      <div className={styles.heroRight}>
        {/* direct path from public/ */}
        <img src="/hero.png" alt="QTify Hero" />
      </div>
    </div>
  );
}
