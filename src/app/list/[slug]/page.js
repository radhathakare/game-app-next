"use client";

import { useEffect, useState } from 'react';
import { getGameData } from '@/lib/data'; // Assuming your data fetching is here
import GameSection from '@/app/Components/home/GameSection';
import Sidebar from '@/app/Components/layout/Sidebar';
import Footer from '@/app/Components/layout/Footer';
import Header from '@/app/Components/layout/Header';
import CookieConsent from '@/app/Components/ui/CookieConsent';

// Receive the 'params' prop
export default function CategoryPage({ params }) {
  const { slug } = params; // Access the slug from params
  const [categoryGames, setCategoryGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (!slug) return; // Don't fetch if slug is not yet available

    async function fetchGamesByCategory() {
      setLoading(true);
      setError(null);
      try {
        const allGames = await getGameData();
        const filteredGames = allGames.filter(
          (game) =>
            game.categories.toLowerCase() === slug.toLowerCase()
        );
        setCategoryGames(filteredGames);
      } catch (err) {
        setError(err.message || 'Failed to fetch games.');
      } finally {
        setLoading(false);
      }
    }

    fetchGamesByCategory();
  }, [slug]); // Re-run effect when the slug changes

  if (loading) {
    return <div>Loading games...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
              <div className="dicegamessos_game_content_main">
                <div className="container">
                  {categoryGames.length > 0 ? (
                    <GameSection
                      title={`${
                        slug.charAt(0).toUpperCase() + slug.slice(1)
                      } Games`}
                      games={categoryGames}
                      bgColor={
                        slug.toLowerCase() === 'simulation'
                          ? 'bg_info'
                          : slug.toLowerCase() === 'adventure'
                          ? 'bg_pink'
                          : slug.toLowerCase() === 'rpg_list' // Adjust as needed
                          ? 'bg_yellow'
                          : slug.toLowerCase() === 'casual'
                          ? 'bg_green'
                          : 'bg_default' // Default background
                      }
                    />
                  ) : (
                    <div>No games found in the {slug} category.</div>
                  )}
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