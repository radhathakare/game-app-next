export default function HotSearches() {
  const hotSearches = [
    'PUBG Mobile', 
    'Hidden Escape', 
    'Disney', 
    'Hill Climb', 
    'Evertale', 
    'Shadow Fight'
  ];
  
  return (
    <div className="dicegamessos_game_box hot_search_wrap">
      <div className="hot_search_content_grid">
        <h2 className="game_info_page_subtitle mb_0">Hot Searches</h2>
        <div className="hot_search_content_wrapper">
          {hotSearches.map((search, index) => (
            <a 
              key={index}
              href={`/search/${search.toLowerCase().replace(/\s+/g, '-')}`} 
              className="hot_search_game_key"
            >
              {search}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
