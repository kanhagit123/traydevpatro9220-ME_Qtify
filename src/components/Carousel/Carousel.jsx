import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import Card from "../Card/Card";
import leftSvg from "../../assets/left.svg";
import rightSvg from "../../assets/right.svg";

export default function Carousel({ data = [], isSong = false }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.wrap}>
      <button
        ref={prevRef}
        className={`${styles.nav} ${styles.prev}`}
        aria-label="Prev"
      >
        <img src={leftSvg} alt="prev" />
      </button>
      <button
        ref={nextRef}
        className={`${styles.nav} ${styles.next}`}
        aria-label="Next"
      >
        <img src={rightSvg} alt="next" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={"auto"}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} style={{ width: 160 }}>
            <Card data={item} type={isSong ? "songs" : "albums"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
