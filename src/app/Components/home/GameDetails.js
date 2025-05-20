"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Calendar,
  Monitor,
  Package,
  Code,
  Award,
} from "lucide-react";
import { MdVerifiedUser } from "react-icons/md";
import SimilarGames from "./SimilarGames";
import GuessYouLike from "./Guessyoulike";
import ReviewSection from "./ReviewSection";
import GameImageCarousel from "./GameImageCarousel";
export function GameDetails({ game }) {
  const formatImageFileName = (title) => {
    return `${title}_icon.png`;
  };

  return (
    <div className="dicegamessos_game_content_main">
      <div className="container">
        <div className="dicegamessos_game_box">
          <div className="dicegamessos_game_info_grid">
            <div className="dicegamessos_game_detail_box">
              <div className="dicegamessos_game_detail_grid">
                <div className="row">
                  <div className="dicegamessos_game_detail_img">
                    <Image
                      src={`/images/${formatImageFileName(game.title)}`}
                      alt={game.title}
                      width={128}
                      height={128}
                      className="rounded-lg"
                      onError={(e) => {
                        e.target.src = "/images/placeholder.png";
                      }}
                    />
                  </div>
                  <div className="dicegamessos_game_detail">
                    <h2 className="text-2xl font-bold mb-4">{game.title}</h2>
                    <div className="dicegamessos_game_cate_review_wrap">
                      <div className="row">
                        <div className="dicegamessos_game_cate_item game_detail_wrapper">
                          <h4>{game.categories}</h4>
                          <p>CATEGORY</p>
                        </div>
                        <div className="dicegamessos_game_rate_item game_detail_wrapper">
                          <h4>5</h4>
                          <div className="review_star_box row">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 fill-gray-400 text-gray-400"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="dicegamessos_game_age_item game_detail_wrapper">
                          <h4>{game.rating}</h4>
                          <p>AGE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dicegamessos_game_about_wrapper">
                <ul className="dicegamessos_game_about_box row js_between">
                  <li className="dicegamessos_game_about_content row">
                    <div className="dicegamessos_game_about_icon">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="dicegamessos_game_content_item">
                      <div className="row js_between">
                        <p>Last Updated:</p>
                        <span>{game.lastUpdated}</span>
                      </div>
                    </div>
                  </li>
                  <li className="dicegamessos_game_about_content row">
                    <div className="dicegamessos_game_about_icon">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div className="dicegamessos_game_content_item">
                      <div className="row js_between">
                        <p>Platform:</p>
                        <span>{game.platform}</span>
                      </div>
                    </div>
                  </li>
                  <li className="dicegamessos_game_about_content row">
                    <div className="dicegamessos_game_about_icon">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="dicegamessos_game_content_item">
                      <div className="row js_between">
                        <p>Current Version:</p>
                        <span>{game.version}</span>
                      </div>
                    </div>
                  </li>
                  <li className="dicegamessos_game_about_content row">
                    <div className="dicegamessos_game_about_icon">
                      <Package className="w-5 h-5" />
                    </div>
                    <div className="dicegamessos_game_content_item">
                      <div className="row js_between">
                        <p>Size:</p>
                        <span>{game.size}</span>
                      </div>
                    </div>
                  </li>
                  <li className="dicegamessos_game_about_content row">
                    <div className="dicegamessos_game_about_icon">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="dicegamessos_game_content_item">
                      <div className="row js_between">
                        <p>Developer:</p>
                        <span>{game.developer}</span>
                      </div>
                    </div>
                  </li>
                  <li className="dicegamessos_game_about_content row">
                    <div className="dicegamessos_game_about_icon">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="dicegamessos_game_content_item">
                      <div className="row js_between">
                        <p>Ratings:</p>
                        <span>{game.rating}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dicegamessos_game_box">
          <div className="dicegamessos_game_get_box">
            <h3 className="game_info_page_subtitle">Get The Game</h3>
            <div className="dicegamessos_game_install_grid row">
              <div className="dicegamessos_game_install_btn_div">
                <Link
                  href={game.url}
                  className="dicegamessos_game_install_btn row align_center js_between"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="row google_play_icon_text">
                    <span>Google Play</span>
                  </p>
                  <span className="link_provide_text">
                    Link Provided by Google Play
                  </span>
                </Link>
              </div>
              <div className="dicegamessos_game_install_btn_div">
                <Link
                  href={game.iosurl}
                  className="dicegamessos_game_install_btn row align_center js_between"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="row google_play_icon_text">
                    <span>App Store</span>
                  </p>
                  <span className="link_provide_text">
                    Link Provided by App Store
                  </span>
                </Link>
              </div>
            </div>

            <div className="game_security_div">
              <div className="row align_center">
                <p className="verified_icon_text row">
                  <MdVerifiedUser className="w-5 h-5" />
                  <span>Verified antivirus</span>
                </p>
                <p>
                  All download links on this website jump to official platforms
                  such as App Store and Google Play. No viruses. No malware.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SimilarGames />
        <div className="ad_box">Advertisement</div>

        <div className="dicegamessos_game_box dicegamessos_game_module_box">
          <h3 className="game_info_page_subtitle">DESCRIPTION</h3>
          <div className="dicegamessos_game_module_desc">
            <div dangerouslySetInnerHTML={{ __html: game.description }} />
          </div>
        </div>
        <GameImageCarousel title={game.title} imageCount={7} />
        <GuessYouLike/>
         <div className="ad_box">Advertisement</div>
        <ReviewSection/>
      </div>
    </div>
  );
}
