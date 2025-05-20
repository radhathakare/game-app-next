'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname hook

import logo from "../../../../public/images/logo.png";
import Image from 'next/image';
import { Home ,SearchIcon, ShapesIcon, RocketIcon,Gamepad2  } from 'lucide-react';
import { GrRun } from "react-icons/gr";
import { PiRocketBold } from "react-icons/pi";
import { ImTarget } from "react-icons/im";
import { FaCarSide } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BiWebcam } from "react-icons/bi";

export default function Sidebar({ isOpen, closeSidebar }) {
  const pathname = usePathname(); // Get the current path

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.dicegamessos_game_left_sidebar');
      if (isOpen && sidebar && !sidebar.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <div className={`dicegamessos_game_left_sidebar ${isOpen ? 'active' : ''}`}>
      <div className="dicegamessos_game_sidebar_container">
        <div className="dicegamessos_game_sidebar_content">
          <div className="dicegamessos_game_content_box">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeSidebar();
              }}
              className="dicegamessos_game_close_icon"
            >
              <i className="iconfont icon-close"></i>
            </a>

            <Link href="/" className="logo">
              <Image src={logo} alt="logo" />
            </Link>

            <nav className="dicegamessos_game_navigation">
              <Link href="/" className={`nav_menu_item row mt_0 ${pathname === '/' ? 'active' : ''}`}>
                <span className="nav_icon">
                  <Home className="iconfont icon-Home"/>
                </span>
                <span className="nav_item_text">Home</span>
              </Link>

              <Link href="/search" className={`nav_menu_item row desktop_search_icon ${pathname === '/search' ? 'active' : ''}`}>
                <span className="nav_icon">
                  <SearchIcon className="iconfont icon-Search"/>
                </span>
                <span className="nav_item_text">Search</span>
              </Link>
            </nav>
          </div>

          <div className="dicegamessos_game_content_box menu_list_box">
            <Link href="/category" className={`nav_menu_item row mt_0 ${pathname === '/category' ? 'active' : ''}`}>
              <span className="nav_icon">
                <ShapesIcon className="iconfont icon-Category"/>
              </span>
              <span className="nav_item_text">Category</span>
            </Link>

            <Link href="/top" className={`nav_menu_item row ${pathname === '/top' ? 'active' : ''}`}>
              <span className="nav_icon">
                <PiRocketBold className="iconfont" size={20} />
              </span>
              <span className="nav_item_text">Top</span>
            </Link>

            <Link href="/online" className={`nav_menu_item row ${pathname === '/online_game_page' ? 'active' : ''}`}>
              <span className="nav_icon">
                <Gamepad2 className="iconfont"/>
              </span>
              <span className="nav_item_text">Online</span>
            </Link>

            <Link href="/more/casual" className={`nav_menu_item row ${pathname === '/more/casual' ? 'active' : ''}`}>
              <span className="nav_icon">
                <GrRun className="iconfont" size={20}/>
              </span>
              <span className="nav_item_text">Casual</span>
            </Link>

            <Link href="/more/shooting" className={`nav_menu_item row ${pathname === '/more/shooting' ? 'active' : ''}`}>
              <span className="nav_icon">
                   <ImTarget className="iconfont" size={20}/>
              </span>
              <span className="nav_item_text">Shooting</span>
            </Link>

            <Link href="/more/rpg" className={`nav_menu_item row ${pathname === '/more/rpg_game' ? 'active' : ''}`}>
              <span className="nav_icon">
                <FaRegUser className="iconfont" size={20}/>
              </span>
              <span className="nav_item_text">RPG</span>
            </Link>

            <Link href="/more/racing" className={`nav_menu_item row ${pathname === '/more/racing' ? 'active' : ''}`}>
              <span className="nav_icon">
                <FaCarSide className="iconfont" size={20}/>
              </span>
              <span className="nav_item_text">Racing</span>
            </Link>

            <Link href="/more/strategy" className={`nav_menu_item row ${pathname === '/more/strategy' ? 'active' : ''}`}>
              <span className="nav_icon">
                <BiWebcam className="iconfont" size={20}/>
              </span>
              <span className="nav_item_text">Strategy</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}