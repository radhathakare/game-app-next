'use client'; // if using app directory

import Image from 'next/image';
import Link from 'next/link';

const games = [
  {
    title: "Taps to Riches",
    href: "games/Taps to Riches",
    img: "Taps to Riches_icon.png",
    alt: "CSR 2 Realistic Drag Racing",
  },
  {
    title: "Injustice 2",
    href: "games/Injustice 2",
    img: "Injustice 2_icon.png",
    alt: "PK XD: Fun, friends games",
  },
  {
    title: "Avabel Online -Tower of Bonds-",
    href: "games/Avabel Online -Tower of Bonds-",
    img: "Avabel Online -Tower of Bonds-_icon.png",
    alt: "CSR 2 Realistic Drag Racing",
  },
  {
    title: "Beholder",
    href: "games/Beholder",
    img: "Beholder_icon.png",
    alt: "PK XD: Fun, friends games",
  },
  {
    title: "TSM",
    href: "games/TSM",
    img: "TSM_icon.png",
    alt: "CSR 2 Realistic Drag Racing",
  },
  {
    title: "Tsuki Adventure 2",
    href: "games/Tsuki Adventure 2",
    img: "Tsuki Adventure 2_icon.png",
    alt: "PK XD: Fun, friends games",
  },
  {
    title: "Grimvalor",
    href: "games/Grimvalor",
    img: "Grimvalor_icon.png",
    alt: "CSR 2 Realistic Drag Racing",
  },
  {
    title: "PUBG MOBILE",
    href: "games/PUBG MOBILE",
    img: "PUBG MOBILE_icon.png",
    alt: "PK XD: Fun, friends games",
  },
  {
    title: "Cut the Rope GOLD",
    href: "games/Cut the Rope GOLD",
    img: "Cut the Rope GOLD_icon.png",
    alt: "CSR 2 Realistic Drag Racing",
  },
  {
    title: "Asphalt Legends Unite",
    href: "games/Asphalt Legends Unite",
    img: "Asphalt Legends Unite_icon.png",
    alt: "PK XD: Fun, friends games",
  },
  {
    title: "World War Heroes — WW2 PvP FPS",
    href: "games/World War Heroes — WW2 PvP FPS",
    img: "World War Heroes — WW2 PvP FPS_icon.png",
    alt: "CSR 2 Realistic Drag Racing",
  },
  {
    title: "Flow Free",
    href: "games/Flow Free",
    img: "Flow Free_icon.png",
    alt: "PK XD: Fun, friends games",
  },
];

const GuessYouLike = () => {
  return (
    <div className="dicegamessos_game_box guess_you_like_wrap">
      <h3 className="game_info_page_subtitle mb_0">Guess You Like</h3>
      <div className="dicegamessos_game_categories_list">
        {games.map((game, index) => (
          <div key={index} className="dicegamessos_game_cate_list_card top_game_card">
            <Link href={`/${game.href}`} className="game_cate_list_body row top_game_card_body">
              <div className="dicegamessos_game_card_top_img">
                <Image
                  className="lazy-load"
                  src={`/images/${game.img}`}
                  alt={game.alt}
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </div>
              <div className="dicegamessos_game_cate_info top_card_info">
                <h5>{game.title}</h5>
                <p>5 <i className="iconfont icon-xing"></i></p>
              </div>
              <div className="top_card_button primary_btn">
                <span className="card_view_btn_text">View</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessYouLike;
