"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerGames = [
  {
    title: "Cut the Rope",
    banner: "/images/Cut the Rope_banner.png",
    icon: "/images/Cut the Rope_icon.png",
    link: "/games/Cut the Rope",
  },
  {
    title: "Toy Blast",
    banner: "/images/Toy Blast_banner.png",
    icon: "/images/Toy Blast_icon.png",
    link: "/games/Toy Blast",
  },
  {
    title: "Subway Surfers",
    banner: "/images/Subway Surfers_banner.png",
    icon: "/images/Subway Surfers_icon.png",
    link: "/games/Subway Surfers",
  },
];

export default function GameBanner({ title }) {
  return (
    <div className="dicegamessos_game_box swiper_slider_image_main">
      <div className="dicegamessos_game_heading_div bg_info">
        <div className="dicegamessos_game_heading_wrap row more_page_heading_wrap">
          <h2>{title}</h2>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        initialSlide={Math.floor(bannerGames.length / 3)} // 👈 start from middle
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="game_banner_slider_grid"
      >
        {bannerGames.map((game, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide game_banner_slide_container"
          >
            <Link href={game.link} className="game_banner_slide">
              <div className="game_banner_img">
                <img src={game.banner} alt={game.title} />
              </div>
              <div className="top_btn_img">
                <img
                  src={`/images/top${index + 1}.png`}
                  alt="top button image"
                />
              </div>
              <div className="slider_game_button row align_center">
                <img src={game.icon} alt={game.title} />
                <span>{game.title}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev swiper_button swiper_button_dark"></div>
        <div className="swiper-button-next swiper_button swiper_button_dark"></div>
      </Swiper>
    </div>
  );
}
