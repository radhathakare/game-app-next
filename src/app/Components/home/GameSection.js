'use client';
import { useState } from 'react';
import GameCard from './GameCard';
import { usePathname } from 'next/navigation';

export default function GameSection({ title, moreLink, bgColor, games }) {
  const pathname = usePathname();

  // Function to check if the current path matches the moreLink
  const isCategoryPage = pathname === moreLink;

  return (
    <div className="dicegamessos_game_box">
      <div className="dicegamessos_game__item">
        <div className={`dicegamessos_game_heading_div ${bgColor}`}>
          <div className="dicegamessos_game_heading_wrap row">
            <h2>{title}</h2>
            {/* Conditionally render the "More >" link */}
            {!isCategoryPage && moreLink && (
              <a href={moreLink} className="more_btn">
                More &gt;
              </a>
            )}
          </div>
        </div>

        <div className="dicegamessos_game_list_grid">
          {games.map((game) => (
            <GameCard
              key={game.id || game.title}
              title={game.title}
              link={ `games/${game.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}