import Product from "./Product";
import Search from "./Search";
import { restaurantsList } from "./constants";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsList);

  function handleFilteredRestaurants(restaurantsFromSearch) {
    setRestaurants(restaurantsFromSearch);
  }

  return (
    <>
      <Search sendFilteredRestaurant={handleFilteredRestaurants} />
      <div className="products">
        {restaurants.map((restaurant) => (
          <Product
            {...restaurant}
            key={restaurant.id}
          />
        ))}
      </div>
    </>
  );
};

export default Body;