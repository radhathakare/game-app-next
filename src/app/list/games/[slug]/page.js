"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getGameData } from "@/lib/data";
import Header from "@/app/Components/layout/Header";
import CookieConsent from "@/app/Components/ui/CookieConsent";
import Sidebar from "@/app/Components/layout/Sidebar";
import Footer from "@/app/Components/layout/Footer";
import { GameDetails } from "@/app/Components/home/GameDetails";

export default function GamePagetd() {
  const { slug } = useParams(); // ✅ get slug from client side
  const [game, setGame] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    async function fetchData() {
      const games = await getGameData();
      const decodedSlug = decodeURIComponent(slug).toLowerCase();

      const matchedGame = games.find(
        (g) =>
          (g.slug && g.slug.toLowerCase() === decodedSlug) ||
          (g.title && g.title.toLowerCase() === decodedSlug)
      );

      setGame(matchedGame);
    }

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!game) {
    return <div>Game not found.</div>;
  }

  return (
    <div className="index_page_body">
      <CookieConsent />
      <Header toggleSidebar={toggleSidebar} />
      <div className="dicegamessos_game_index_main">
        <div className="dicegamessos_game_inner">
          <div className="row">
            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
            <div className="dicegamessos_game_body_wrapper">
             
                  <GameDetails game={game} />
               
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
