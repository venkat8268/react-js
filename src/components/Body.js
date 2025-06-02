import Product from "./Product";
import Search from "./Search";
import { restaurantsList } from "./constants";
import { useState } from "react";

const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantsList);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsList);

    function filterRestaurants(searchText, restaurants) {    
        return restaurants.filter((restaurant) => (
            restaurant.name.includes(searchText)
        ))
    }
    
    return (
        <>
            {/* <Search /> */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-product"
                    value={searchText}
                    onChange={
                        (e) => (
                            setSearchText(e.target.value)
                        )
                    }
                />
                <button
                    className="search-button"
                    onClick={() => (
                        setFilteredRestaurants(filterRestaurants(searchText, restaurants))
                    )}
                >
                    Search
                </button>
            </div>
            <div className="products">
                {filteredRestaurants.map((restaurant) => {
                    return <Product restaurant={restaurant} name={restaurant.name} key={restaurant.id} />
                })}
            </div>
        </>
    )
};

export default Body;