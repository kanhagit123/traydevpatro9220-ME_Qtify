import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Section from "./components/Section/Section.jsx";
import Songs from "./components/Songs/Songs.jsx";
import Player from "./components/Player/Player.jsx";
import Faq from "./components/Faq/Faq";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        apiUrl="https://qtify-backend-labs.crio.do/albums/top"
        type="albums"
        showToggle
      />
      <Section
        title="New Albums"
        apiUrl="https://qtify-backend-labs.crio.do/albums/new"
        type="albums"
        showToggle
      />

      {/* 👇 Yaha Section ki jagah Songs component use karo */}
      <Songs />

      <Faq />
      <Player />
    </>
  );
}
