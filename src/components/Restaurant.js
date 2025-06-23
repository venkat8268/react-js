import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantShimmer } from "./RestaurantShimmer";
import Menu from "./Menu";
import { RESTURANT_MENU_API_URL_WITH_ID, CLOUDINARY_IMAGE_URL } from "./constants";

const Restaurant = () => {

    const [restaurant, setRestaurant] = useState([]);
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [toggleAccordion, setToggleAccordion] = useState(2);

    useEffect(() => {
        getRestaurant();

        const timer = setInterval(() => {
            console.log('logging every 100000 ms inside restaurant');
        }, 100000)

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

            const restaurantData = restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards; 
            setRestaurantMenu(restaurantData.filter((menu) => menu?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
            
        } catch (e) {
            console.log(e);

        }
    }

    return (restaurant.length === 0) ? <RestaurantShimmer /> : (
        <div className="restaurant">
            <div className="restaurant-hero">
                <img src={CLOUDINARY_IMAGE_URL + restaurant.cloudinaryImageId} className="w-30 h-20 object-cover rounded-xl me-4"/>
                <div>
                    <h1 className="text-2xl font-bold">{restaurant.name}</h1>
                    <div className="restaurant-rating">
                        <span>{restaurant.avgRating} stars ({restaurant.totalRatingsString})</span>
                        <span className="dot">•</span>
                        <span>{restaurant.costForTwoMessage}</span>
                    </div>
                    <div className="restaurant-cuisines">{restaurant.cuisines.join(', ')}</div>
                </div>
            </div>
            <div className="pt-8">
                {restaurantMenu?.map((menu, index) => {                    
                    return <Menu key={index} {...menu.card.card} accordion={index == toggleAccordion ? true : false} toggleAccordion={() => setToggleAccordion(index)} />
                })}
            </div>
        </div>
    )
}

export default Restaurant