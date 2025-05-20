import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import GameCard from './GameCard';

export function GameGrid({ games }) {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleImageLoad = (slug) => {
    setLoadedImages(prev => new Set(prev).add(slug));
  };

  return (
    <div className="dicegamessos_game_box">
      <div className="dicegamessos_game__item">
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
