// src/components/Songs/Songs.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import styles from "./Songs.module.css";

export default function Songs() {
  // ✅ Fixed 5 genres
  const genres = [
    { key: "all", label: "All" },
    { key: "jazz", label: "Jazz" },
    { key: "rock", label: "Rock" },
    { key: "pop", label: "Pop" },
    { key: "blues", label: "Blues" },
  ];

  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Fetch songs from API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
        setSongs(res.data); // API se songs array aata hai
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  // Filter songs by selected genre
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter(
          (song) => song.genre.key.toLowerCase() === selectedGenre
        );

  return (
    <div className={styles.songsSection}>
      <h2>Songs</h2>

      {/* Genre Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "#34d058" } }}
        className={styles.genreTabs}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
            sx={{ color: "#fff" }}
          />
        ))}
      </Tabs>

      {/* Songs Carousel */}
      {filteredSongs.length > 0 ? (
        <Carousel data={filteredSongs} isSong={true} />
      ) : (
        <p style={{ color: "white", marginTop: "20px" }}>No songs found.</p>
      )}
    </div>
  );
}
