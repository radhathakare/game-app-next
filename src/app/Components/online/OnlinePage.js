"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';

const hotGames = [
  { id: 1, title: "Hidden Escape Mysteries", icon: "/images/Hidden Escape Mysteries_icon.png", link: "/games/Hidden Escape Mysteries", rating: 5 },
  { id: 2, title: "Plants vs Zombies™ 2", icon: "/images/Plants vs Zombies™ 2_icon.png", link: "/games/Plants vs Zombies™ 2", rating: 5 },
  { id: 3, title: "Candy Crush Saga", icon: "/images/Candy Crush Saga_icon.png", link: "/games/Candy Crush Saga", rating: 5 },
  { id: 4, title: "Bejeweled Blitz", icon: "/images/Bejeweled Blitz_icon.png", link: "/games/Bejeweled Blitz", rating: 5 },
  { id: 5, title: "Cooking Diary® Restaurant Game", icon: "/images/Cooking Diary® Restaurant Game_icon.png", link: "/games/Cooking Diary® Restaurant Game", rating: 5 },
  { id: 6, title: "Clash of Clans", icon: "/images/Clash of Clans_icon.png", link: "/games/Clash of Clans", rating: 5 },
  { id: 7, title: "8 Ball Pool", icon: "/images/8 Ball Pool_icon.png", link: "/games/8 Ball Pool", rating: 5 },
  { id: 8, title: "Coin Master", icon: "/images/Coin Master_icon.png", link: "/games/Coin Master", rating: 5 },
  { id: 9, title: "Stray Cat Doors3 Cat Adventure", icon: "/images/Stray Cat Doors3 Cat Adventure_icon.png", link: "/games/Stray Cat Doors3 Cat Adventure", rating: 5 },
  { id: 10, title: "Shadow Fight 2", icon: "/images/Shadow Fight 2_icon.png", link: "/games/Shadow Fight 2", rating: 5 },
  { id: 11, title: "Slotomania™ Slots Casino Games", icon: "/images/Slotomania™ Slots Casino Games_icon.png", link: "/games/Slotomania™ Slots Casino Games", rating: 5 },
  { id: 12, title: "My Talking Angela", icon: "/images/My Talking Angela_icon.png", link: "/games/My Talking Angela", rating: 5 },
  { id: 13, title: "Knighthood - RPG Knights", icon: "/images/Knighthood - RPG Knights_icon.png", link: "/games/Knighthood - RPG Knights", rating: 5 },
  { id: 14, title: "Into the Dead 2", icon: "/images/Into the Dead 2_icon.png", link: "/games/Into the Dead 2", rating: 5 },
  { id: 15, title: "Hay Day", icon: "/images/Hay Day_icon.png", link: "/games/Hay Day", rating: 5 },
  { id: 16, title: "Toca Boca World", icon: "/images/Toca Boca World_icon.png", link: "/games/Toca Boca World", rating: 5 },
  { id: 17, title: "Transport Empire 3D Tycoon", icon: "/images/Transport Empire 3D Tycoon_icon.png", link: "/games/Transport Empire 3D Tycoon", rating: 5 },
  { id: 18, title: "My Talking Tom 2", icon: "/images/My Talking Tom 2_icon.png", link: "/games/My Talking Tom 2", rating: 5 }
];

export default function OnlineGames() {
  const [isVisible, setIsVisible] = useState({});
  const imgRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-id'));
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    hotGames.forEach((game) => {
      if (imgRefs.current[game.id]) {
        observer.observe(imgRefs.current[game.id]);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dicegamessos_game_box">
      <div className="dicegamessos_game__item">
        <div className="dicegamessos_game_heading_div bg_info">
          <div className="dicegamessos_game_heading_wrap row">
            <h2>Online Games</h2>
          </div>
        </div>
        <div className="dicegamessos_game_categories_list">
          {hotGames.map((game) => (
            <div key={game.id} className="dicegamessos_game_cate_list_card top_game_card">
              <Link href={game.link} className="game_cate_list_body row top_game_card_body">
                <div className="dicegamessos_game_card_top_img">
                  <img
                    ref={(el) => (imgRefs.current[game.id] = el)}
                    data-id={game.id}
                    src={isVisible[game.id] ? game.icon : "/images/lazy.png"}
                    alt={game.title}
                    className={!isVisible[game.id] ? "lazy-load" : ""}
                  />
                </div>
                <div className="dicegamessos_game_cate_info top_card_info">
                  <h5>{game.title}</h5>
                  <p className='row align_center js_center gap-1'>{game.rating} <Star className="inline-block w-3 h-3 fill-gray-400 text-gray-400"  /></p>
                </div>
                <div className="top_card_button primary_btn">
                  <span className="card_view_btn_text">View</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
