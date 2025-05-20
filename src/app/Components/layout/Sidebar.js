'use client';

import Link from 'next/link';
import { useEffect } from 'react';
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
              <Link href="/" className="nav_menu_item row mt_0 active">
                <span className="nav_icon">
                  {/* <i className="iconfont icon-Home"></i> */}
                  <Home className="iconfont icon-Home"/>
                </span>
                
                <span className="nav_item_text">Home</span>
              </Link>

              <Link href="/search" className="nav_menu_item row desktop_search_icon">
                <span className="nav_icon">
                  <SearchIcon className="iconfont icon-Search"/>
                  {/* <i className="iconfont icon-Search"></i> */}
                </span>
                <span className="nav_item_text">Search</span>
              </Link>
            </nav>
          </div>

          <div className="dicegamessos_game_content_box menu_list_box">
            <Link href="/category" className="nav_menu_item row mt_0">
              <span className="nav_icon">
                <ShapesIcon className="iconfont icon-Category"/>
                {/* <i className="iconfont icon-Category"></i> */}
              </span>
              <span className="nav_item_text">Category</span>
            </Link>

            <Link href="/top" className="nav_menu_item row">
              <span className="nav_icon">
                <PiRocketBold className="iconfont" size={20} />
                {/* <i className="iconfont icon-Top"></i> */}
              </span>
              <span className="nav_item_text">Top</span>
            </Link>

            <Link href="/online_game_page" className="nav_menu_item row">
              <span className="nav_icon">
                <Gamepad2 className="iconfont"/>
                {/* <i className="iconfont icon-Online"></i> */}
              </span>
              <span className="nav_item_text">Online</span>
            </Link>

            <Link href="/more/casual" className="nav_menu_item row">
              <span className="nav_icon">
                <GrRun className="iconfont" size={20}/>
                <i className="iconfont icon-Parkour"></i>
              </span>
              <span className="nav_item_text">Casual</span>
            </Link>

            <Link href="/more/shooting" className="nav_menu_item row">
              <span className="nav_icon">
                 <ImTarget className="iconfont" size={20}/>
                <i className="iconfont icon-Shooting"></i>
              </span>
              <span className="nav_item_text">Shooting</span>
            </Link>

            <Link href="/more/rpg_game" className="nav_menu_item row">
              <span className="nav_icon">
                <FaRegUser  className="iconfont" size={20}/>
                <i className="iconfont icon-RPG"></i>
              </span>
              <span className="nav_item_text">RPG</span>
            </Link>

            <Link href="/more/racing" className="nav_menu_item row">
              <span className="nav_icon">
                <FaCarSide className="iconfont" size={20}/>
                <i className="iconfont icon-Racing"></i>
              </span>
              <span className="nav_item_text">Racing</span>
            </Link>

            <Link href="/more/strategy" className="nav_menu_item row">
              <span className="nav_icon">
                <BiWebcam className="iconfont" size={20}/>
                <i className="iconfont icon-Strategy"></i>
              </span>
              <span className="nav_item_text">Strategy</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
