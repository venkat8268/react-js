import Product from "./Product";
import Search from "./Search";
import { restaurantsList, RESTURANT_API_URL } from "./constants";
import { useState, useEffect } from "react";
import ProductShimmer from "./ProductShimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    function handleFilteredRestaurants(restaurantsFromSearch) {
        setRestaurants(restaurantsFromSearch);
    }

    useEffect(() => {
        const swiggyRestaurants = fetch(RESTURANT_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            })
            .catch(error => {
                console.log('There was a problem with the fetch operation:', error);
            });

    }, []);

    return (restaurants.length === 0) 
    ? 
        <ProductShimmer /> 
    : 
    (
        <>
            <Search sendFilteredRestaurant={handleFilteredRestaurants} />
            <div className="products">
                {restaurants.map((restaurant) => (
                    <Product
                        restaurant={restaurant}
                        key={restaurant.info.id}
                    />
                ))}
            </div>
        </>
    );
};

export default Body;