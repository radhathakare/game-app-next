"use client";

import { useState, useEffect } from 'react'; // Import useEffect
import GameSection from '../Components/home/GameSection';
import { GameGrid } from '../Components/home/GameGrid';
import Sidebar from '../Components/layout/Sidebar';
import Footer from '../Components/layout/Footer';
import Header from '../Components/layout/Header';
import CookieConsent from '../Components/ui/CookieConsent';
import { getGameData } from '@/lib/data';
import Extensiongrid from '../Components/home/Extensiongrid';
export default function Extention() {
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

  const arcade = allGames.filter(game => game.categories === "Arcade");
 
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
                  <Extensiongrid/>
                  {/* <GameGrid
                    title="Simulation Games"
                    moreLink="/list/simulation"
                    bgColor="bg_info"
                    games={arcade}
                  /> */}
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

