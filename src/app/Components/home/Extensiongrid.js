import React, { useEffect, useState } from "react";
import { getGameData } from "../../../lib/data"; // Update path as needed
import Image from "next/image";
const formatImageFileName = (title) => {
  return `${title}_icon.png`;
};

const Extensiongrid = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getGameData();
      setGames(data);
    }
    fetchData();
  }, []);

  return (
    <div className="extension_game_list_grid">
      {games.map((game, index) => (
        <div className="extension_game_list_card" key={index}>
          <a
            href={game.slug || `games/${game.title}`}
            className="extension_card_body"
          >
            <div className="dicegamessos_game_card_img extension_card_image">
              <Image
                src={`/images/${formatImageFileName(game.title)}`}
                alt={game.title}
                fill
                sizes="128px"
                className="rounded-lg object-cover"
                onError={(e) => {
                  e.target.src = "/images/placeholder.png";
                }}
              />
            </div>
            <div className="dicegamessos_game_card_hover extension_game_card_hover">
              <p>{game.title}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Extensiongrid;
