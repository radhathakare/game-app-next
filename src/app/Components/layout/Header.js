'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../../public/images/logo.png";

export default function Header({ toggleSidebar }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <Link href="/" className="tablet_logo">
            <Image src={logo} alt="logo" />
          </Link>

          <nav className="row">
            <Link href="/search_page" className="tablet_icon">
              <i className="iconfont icon-Search"></i>
            </Link>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
              className="tablet_cate_menu tablet_icon"
            >
              <i className="iconfont icon-Category"></i>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
