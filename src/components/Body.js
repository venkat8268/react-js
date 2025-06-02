import Product from "./Product";
import Search from "./Search";
import { restaurantsList } from "./constants";
import { useState } from "react";

function filterRestaurants(searchText, restaurants) {    
    return restaurants.filter((restaurant) => (
        restaurant.name.includes(searchText)
    )
)}

const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantsList);
    const [searchText, setSearchText] = useState('');

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
                        setRestaurants(filterRestaurants(searchText, restaurants))
                    )}
                >
                    Search
                </button>
            </div>
            <div className="products">
                {restaurants.map((restaurant) => {
                    return <Product restaurant={restaurant} name={restaurant.name} key={restaurant.id} />
                })}
            </div>
        </>
    )
};

export default Body;