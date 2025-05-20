import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: '',
    href: 'list/simulation',
    img: '/images/simulation_icon.png',
    alt: 'simulation',
    title: 'Simulation',
    count: '148 Games',
  },
  {
    id: 'adventure',
    href: 'list/adventure',
    img: '/images/Adventure_icon.png',
    alt: 'adventure',
    title: 'Adventure',
    count: '132 Games',
  },
  {
    id: 'RPG',
    href: 'list/rpg',
    img: '/images/RPG_icon.png',
    alt: 'RPG',
    title: 'RPG',
    count: '154 Games',
  },
  {
    id: 'casual',
    href: 'list/casual',
    img: '/images/Casual_cion.png',
    alt: 'casual',
    title: 'Casual',
    count: '178 Games',
  },
];

export default function CategoryList() {
  return (
    <div className="dicegamessos_game_box">
      <div className="dicegamessos_game__item">
        <div className="dicegamessos_game_heading_div bg_info">
          <div className="dicegamessos_game_heading_wrap row">
            <h2>Category</h2>
          </div>
        </div>

        <div className="dicegamessos_game_categories_list" id="category">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="dicegamessos_game_cate_list_card"
              id={cat.id || undefined}
            >
              <Link href={cat.href} className="game_cate_list_body row">
                <div className="dicegamessos_game_card_cate_img">
                  <Image
                    src={cat.img}
                    alt={cat.alt}
                    width={64}
                    height={64}
                    placeholder="blur"
                    blurDataURL="/images/lazy.png"
                  />
                </div>
                <div className="dicegamessos_game_cate_info">
                  <h5>{cat.title}</h5>
                  <p>{cat.count}</p>
                </div>
                <div className="dicegamessos_game_cate_card_button primary_btn">
                  <ArrowRight className="iconfont icon-youjiantou"/>
                  <i className="iconfont icon-youjiantou"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
