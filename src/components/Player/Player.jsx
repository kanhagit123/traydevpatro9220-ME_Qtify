// src/components/Player/Player.jsx
import React, { useState } from "react";
import styles from "./Player.module.css";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(38); // seconds
  const duration = 218; // 3:38

  const togglePlay = () => setIsPlaying(!isPlaying);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className={styles.player}>
      {/* LEFT: album image + text */}
      <div className={styles.left}>
        <img src="/album.png" alt="Album cover" className={styles.cover} />
        <div>
          <h4>Sample Song</h4>
          <p>QTify Album</p>
        </div>
      </div>

      {/* RIGHT: play button + progress */}
      <div className={styles.right}>
        {/* Top row: play button */}
        <button className={styles.playBtn} onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶️"}
        </button>

        {/* Bottom row: timings + progress bar */}
        <div className={styles.progressWrap}>
          <span>{formatTime(progress)}</span>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${(progress / duration) * 100}%` }}
            ></div>
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
