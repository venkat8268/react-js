import { restaurantsList } from "./constants";
import { useState } from "react";

const Search = ({ sendFilteredRestaurant }) => {
  const [searchText, setSearchText] = useState('');

  function filterRestaurants(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  function handleSearch() {
    const filtered = filterRestaurants(searchText, restaurantsList);
    sendFilteredRestaurant(filtered); // send to parent
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-product"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
