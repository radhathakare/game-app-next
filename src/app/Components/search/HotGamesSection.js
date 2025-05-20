'use client';

import { useState, useEffect } from 'react';
import GameCard from '../home/GameCard';
import { getGameData } from '@/lib/data';

export default function HotGamesSection() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-card px-6 py-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Hot Games</h2>
        </div>
      </div>
      
      <div className="p-6">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-secondary aspect-square rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {getGameData.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                imageUrl={game.imageUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
