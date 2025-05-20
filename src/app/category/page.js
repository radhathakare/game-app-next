"use client";

import { useState, useEffect } from 'react'; // Import useEffect
import Sidebar from '../Components/layout/Sidebar';
import Footer from '../Components/layout/Footer';
import Header from '../Components/layout/Header';
import CookieConsent from '../Components/ui/CookieConsent';
import { getGameData } from '@/lib/data';
import GameBox from '../Components/home/GamesBox';
import CategoryList from '../Components/category/categorylist';
import HotGames from '../Components/category/HotGames';

export default function CategoryPage() {
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

    const simulationGames = allGames.filter(game => game.categories === "Simulation");

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
                      <CategoryList/>
                       <div className="ad_box">Advertisement</div>
                    
                      <HotGames 
                      title="Simulation Games"  
                      moreLink="/list/simulation" 
                      games={simulationGames} />
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
