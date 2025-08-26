import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Section({ title, apiUrl, type, showToggle = true }) {
  const [data, setData] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(apiUrl);
        setData(res.data);
      } catch (err) {
        console.error(`Error fetching ${title}:`, err);
      }
    }
    fetchData();

    if (type === "songs") {
      axios
        .get("https://qtify-backend-labs.crio.do/genres")
        .then((res) =>
          setGenres([{ key: "all", label: "All" }, ...res.data.data])
        )
        .catch((err) => console.error("Error fetching genres:", err));
    }
  }, [apiUrl, type]);

  const filteredData =
    type === "songs" && selectedGenre !== "all"
      ? data.filter((song) => song.genre.key === selectedGenre)
      : data;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        {showToggle && type === "albums" && (
          <button
            className={styles.toggleBtn}
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {/* ✅ Divider under Albums/New Albums header */}
      {type === "albums" && <div className={styles.divider}></div>}

      {type === "songs" && (
        <div className={styles.tabsWrapper}>
          <Tabs
            value={selectedGenre}
            onChange={(e, val) => setSelectedGenre(val)}
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{ style: { backgroundColor: "#34d058" } }}
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
        </div>
      )}

      {viewAll ? (
        <div className={styles.grid}>
          {filteredData.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel data={filteredData} isSong={type === "songs"} />
      )}

      {/* ✅ Divider after Songs cards */}
      {type === "songs" && <div className={styles.divider}></div>}
    </div>
  );
}
