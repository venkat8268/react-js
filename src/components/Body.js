import Product, {isVeg} from "./Product";
import Search from "./Search";
import { restaurantsList, RESTURANT_API_URL } from "./constants";
import { useState, useEffect } from "react";
import ProductShimmer from "./ProductShimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const IsVeg = isVeg(Product)


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
                setRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                        <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                            {console.log(restaurant)}
                            {/* if veg show green symbol else normal */}
                            {restaurant.info.veg ? <IsVeg restaurant={restaurant}/> : <Product restaurant={restaurant}/>}
                        </Link>
                    ))
                )}
            </div>
        </>
    );

};

export default Body;