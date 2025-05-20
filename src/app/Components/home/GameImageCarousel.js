import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GameImageCarousel = ({ title, imageCount = 7 }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Swiper = require("swiper").default;

      setTimeout(() => {
        new Swiper(".swiper", {
          slidesPerView: "auto",
          spaceBetween: 10,
          loop: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }, 0);
    }
  }, []);

  const formattedTitle = title.replace(/[^a-zA-Z0-9]/g, " ").trim();

  return (
    <div className="dicegamessos_game_box swiper_slider_image_main">
      <div className="swiper">
        <div className="swiper-wrapper">
          {[...Array(imageCount)].map((_, index) => {
            const imageIndex = index + 1;
            const fileName = `${formattedTitle}_${imageIndex}.png`;

            return (
              <div className="swiper-slide game_info_img_slide" key={imageIndex}>
                <img
                  id={`img_ss_${imageIndex}`}
                  src={`/images/${fileName}`}
                  alt={`Slide ${imageIndex}`}
                  onError={(e) => {
                    e.target.src = "/images/placeholder.png";
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="swiper-button-prev swiper_button">
          <ArrowLeft className="iconfont" />
        </div>
        <div className="swiper-button-next swiper_button">
          <ArrowRight className="iconfont" />
        </div>
        <div className="swiper-pagination"></div> {/* Important */}
      </div>
    </div>
  );
};

export default GameImageCarousel;
