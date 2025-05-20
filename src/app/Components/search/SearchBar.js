'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/${query.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="dicegamessos_game_box search_page_search_box">
      <form onSubmit={handleSubmit} className="search_bar_body row align_center">
        <button
          type="button"
          onClick={() => router.back()}
          className="search_page_back_icon row align_center js_center"
          aria-label="Go back"
        >
         
         <MdOutlineArrowBackIos  size={20} />
        </button>

        <div className="search_bar_wrapper row align_center">
          <input
            type="text"
            name="search_bar"
            id="search_bar"
            placeholder="Search for games…"
            className="search_bar_input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="search_submit_btn row align_center js_center"
            id="search_button"
            aria-label="Submit search"
          >
           <IoSearch size={25} />
          </button>
        </div>
      </form>
    </div>
  );
}
