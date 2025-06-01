import Product from "./Product";
import {restaurantsList} from "./constants";

const Body = () => {

    return (
        <div className="products">
            {restaurantsList.map((restaurant) => {
                return <Product restaurant={restaurant} name={restaurant.name} key={restaurant.id}/>
            })}
        </div>
    )
};

export default Body;