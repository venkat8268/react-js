import { useContext, useState } from "react";
import UserContext from "./UserContext";

const Search = ({ sendFilteredRestaurant, allRestaurants  }) => {
  
  const [searchText, setSearchText] = useState('');
  const {loggedInUser, setUserName} = useContext(UserContext)
  

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
        data-testid="searchContainer"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button data-testid="searchButton" className="search-button cursor-pointer bg-green-300 text-black py-1.5 px-4 border-green-500 rounded border-2" onClick={handleSearch}>
        Search
      </button>

      <label className="ms-6 font-bold"> User Name</label>
      <input
        type="text"
        className="search-product border rounded ms-2"
        value={loggedInUser}    
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default Search;
