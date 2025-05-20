import Image from "next/image";
import Link from "next/link";

const similarGames = [
  {
    name: "Delicious - Hopes and Fears",
    href: "Delicious - Hopes and Fears",
    img: "/images/Delicious - Hopes and Fears_icon.png",
    alt: "Poppy Playtime Chapter 1"
  },
  {
    name: "Toy Blast",
    href: "Toy Blast",
    img: "/images/Toy Blast_icon.png",
    alt: "angry_birds"
  },
  {
    name: "ANOTHER EDEN Global",
    href: "ANOTHER EDEN Global",
    img: "/images/ANOTHER EDEN Global_icon.png",
    alt: "minion_rush"
  },
  {
    name: "Geometry Dash",
    href: "Geometry Dash",
    img: "/images/Geometry Dash_icon.png",
    alt: "Poppy Playtime Chapter 1"
  },
  {
    name: "City Island 5 - Building Sim",
    href: "City Island 5 - Building Sim",
    img: "/images/City Island 5 - Building Sim_icon.png",
    alt: "Where's My Water?"
  },
  {
    name: "Family Island™ — Farming game",
    href: "Family Island™ — Farming game",
    img: "/images/Family Island™ — Farming game_icon.png",
    alt: "Where's My Water?"
  },
  {
    name: "Hungry Shark Evolution",
    href: "Hungry Shark Evolution",
    img: "/images/Hungry Shark Evolution_icon.png",
    alt: "angry_birds"
  },
  {
    name: "Ninja Arashi",
    href: "Ninja Arashi",
    img: "/images/Ninja Arashi_icon.png",
    alt: "minion_rush"
  }
];

export default function SimilarGames() {
  return (
    
    <div className="dicegamessos_game_get_box dicegamessos_game_similar_wrap">
      <h3 className="game_info_page_subtitle mb_0">Similar Games</h3>
      <div className="dicegamessos_game_list_grid similar_game_list_grid">
        {similarGames.map((game, index) => (
          <div key={index} className="dicegamessos_game_list_card similar_game_card">
            <Link href={game.href} className="dicegamessos_game_card_body">
              <div className="dicegamessos_game_card_img">
                <Image
                  src={game.img}
                  alt={game.alt}
                  width={150}
                  height={150}
                  loading="lazy"
                  className="lazy-load"
                />
              </div>
              <div className="dicegamessos_game_card_hover">
                <p>{game.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    
  );
}
