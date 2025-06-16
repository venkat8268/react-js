import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantShimmer } from "./RestaurantShimmer";
import Menu from "./Menu";
import { RESTURANT_MENU_API_URL_WITH_ID } from "./constants";

const Restaurant = () => {

    const [restaurant, setRestaurant] = useState([]);
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurant();

        const timer = setInterval(() => {
            console.log('logging every second inside restaurant');
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    const { id } = useParams();

    async function getRestaurant() {
        try {
            // getting the restaurant constant from the constants.js file by usung RESTURANT_MENU_API_URL_WITH_ID function

            const response = await fetch(RESTURANT_MENU_API_URL_WITH_ID(id))
            const restaurant = await response.json();
            setRestaurant(restaurant?.data?.cards[2]?.card?.card?.info);
            setRestaurantMenu(restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);            
            
        } catch (e) {
            console.log(e);

        }
    }

    return (restaurant.length === 0) ? <RestaurantShimmer /> : (
        <div className="restaurant">
            <div className="restaurant-hero">
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + restaurant.cloudinaryImageId} />
                <div>
                    <h1>{restaurant.name}</h1>
                    <div className="restaurant-rating">
                        <span>{restaurant.avgRating} stars ({restaurant.totalRatingsString})</span>
                        <span className="dot">•</span>
                        <span>{restaurant.costForTwoMessage}</span>
                    </div>
                    <div className="restaurant-cuisines">{restaurant.cuisines.join(', ')}</div>
                </div>
            </div>
            <div>
                {restaurantMenu?.map((menu, index) => {                    
                    return <Menu key={index} menu={menu} />
                })}
            </div>
        </div>
    )
}

export default Restaurant