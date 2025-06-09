import Product from "./Product";
import Search from "./Search";
import { restaurantsList, RESTURANT_API_URL } from "./constants";
import { useState, useEffect } from "react";
import ProductShimmer from "./ProductShimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    

    function handleFilteredRestaurants(restaurantsFromSearch) {
        setFilteredRestaurants(restaurantsFromSearch);
    }

    useEffect(() => {
        fetch(RESTURANT_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                setFilteredRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            })
            .catch(error => {
                console.log('There was a problem with the fetch operation:', error);
            });

    }, []);

    if (restaurants.length === 0) {
        return <ProductShimmer />;
    }

    return (
        <>
            <Search sendFilteredRestaurant={handleFilteredRestaurants} allRestaurants={restaurants} />
            <div className="products">
                {filteredRestaurants.length === 0 ? (
                    <div>No products</div>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <Product
                            restaurant={restaurant}
                            key={restaurant.info.id}
                        />
                    ))
                )}
            </div>
        </>
    );

};

export default Body;