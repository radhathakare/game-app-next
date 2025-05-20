"use client";

import { useState, useEffect } from 'react'; // Import useEffect
import GameSection from './Components/home/GameSection';
import Sidebar from './Components/layout/Sidebar';
import Footer from './Components/layout/Footer';
import Header from './Components/layout/Header';
import CookieConsent from './Components/ui/CookieConsent';
import { getGameData } from '@/lib/data';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [allGames, setAllGames] = useState([]); // State to hold all game data

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    async function fetchGameData() {
      const data = await getGameData();
      setAllGames(data);
    }

    fetchGameData();
  }, []);

  // Filter games by category
  const simulationGames = allGames.filter(game => game.categories === "Simulation");
  const adventureGames = allGames.filter(game => game.categories === "Adventure");
  const rpgGames = allGames.filter(game => game.categories === "RPG");
  const casualGames = allGames.filter(game => game.categories === "Casual");

  return (
    <div className="index_page_body">
      <CookieConsent />

      <Header toggleSidebar={toggleSidebar} />

      <div className="dicegamessos_game_index_main">
        <div className="dicegamessos_game_inner">
          <div className="row">
            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

            <div className="dicegamessos_game_body_wrapper">
              <div className="dicegamessos_game_content_main">
                <div className="container">
                  <GameSection
                    title="Simulation Games"
                    moreLink="/list/simulation"
                    bgColor="bg_info"
                    games={simulationGames}
                  />

                  <div className="ad_box">Advertisement</div>

                  <GameSection
                    title="Adventure Games"
                    moreLink="/list/adventure"
                    bgColor="bg_pink"
                    games={adventureGames}
                  />

                  <div className="ad_box">Advertisement</div>

                  <GameSection
                    title="RPG Games"
                    moreLink="/list/rpg_list"
                    bgColor="bg_yellow"
                    games={rpgGames}
                  />

                  <GameSection
                    title="Casual Games"
                    moreLink="/list/casual"
                    bgColor="bg_green"
                    games={casualGames}
                  />
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

