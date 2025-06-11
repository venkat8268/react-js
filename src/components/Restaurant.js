import { useEffect } from "react";
import { useParams } from "react-router-dom"

const Restaurant = () => {

    useEffect(() => {
        getRestaurant();
    }, [])

    const { id } = useParams();

    async function  getRestaurant() {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId='+id)
            const restaurant = await response.json();
            console.log(restaurant?.data?.cards[2]?.card?.card?.info);
        } catch(e) {
            console.log(e);
            
        }
    }

    return (
        <>
            <h1>Restaurant View</h1>
        </>
    )
}

export default Restaurant