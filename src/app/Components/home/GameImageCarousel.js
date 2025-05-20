'use client';

import React from "react"; 
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const GameImageCarousel = ({ title, imageCount = 7 }) => {
  const formattedTitle = title.trim();

  const bannerGames = Array.from({ length: imageCount }).map((_, i) => ({
    link: `/game/${formattedTitle}-${i + 1}`,
    banner: `/images/${formattedTitle}_${i + 1}.png`, 
    icon: `/images/icon${i + 1}.png`, 
    title: `Game Title ${i + 1}`,
  }));

  return (
    <div className="dicegamessos_game_box swiper_slider_image_main">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        initialSlide={bannerGames.length > 0 ? Math.floor(bannerGames.length / 3) : 0}
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
                <img
                  src={game.banner}
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = "/images/placeholder.png"; 
                  }}
                />
              </div>
              <div className="top_btn_img">
                <img
                  src={`/images/top${index + 1}.png`}
                  alt="top button image"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.png"; 
                  }}
                />
              </div>
              <div className="slider_game_button row align_center">
                <img
                  src={game.icon}
                  alt={game.title}
                  onError={(e) => {
                    e.target.src = "/images/placeholder.png"; 
                  }}
                />
                <span>{game.title}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}

    
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev swiper_button swiper_button_dark">
            {/* <ArrowLeft className="text-black" /> */}
        </div>
        <div className="swiper-button-next swiper_button swiper_button_dark">
            {/* <ArrowRight className="text-black" /> */}
        </div>
      </Swiper>
    </div>
  );
};

export default GameImageCarousel;