import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="dicegamessos_game_footer_inner">
        <div className="container">
          <div className="dicegamessos_game_footer_top">
            <nav className="dicegamessos_game_footer_link">
              <Link href="/about/about_page" className="footer_link_item">About Us</Link>
              <Link href="/about/privacy_page" className="footer_link_item">Privacy</Link>
              <Link href="/about/trems_page" className="footer_link_item">Terms of Use</Link>
            </nav>
          </div>

          <div className="dicegamessos_game_footer_bottom">
            <p className="footer_copyright">
              Copyright ©xyz.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
