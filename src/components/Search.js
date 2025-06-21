import { useState } from "react";

const Search = ({ sendFilteredRestaurant, allRestaurants  }) => {
  
  const [searchText, setSearchText] = useState('');

  function filterRestaurants(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  function handleSearch() {
    const filtered = filterRestaurants(searchText, allRestaurants);
    
    sendFilteredRestaurant(filtered); // send to parent
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-product border border-2 rounded"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-button cursor-pointer bg-green-300 text-black py-1.5 px-4 border-green-500 rounded border-2" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
