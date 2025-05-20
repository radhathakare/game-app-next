'use client';

import { useState } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex">
            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
          <div className="bg-background min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
