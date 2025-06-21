
const Product = ({restaurant}) => {
    
    return (
        <div className="product">
            <div className="image-container">
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+restaurant.info.cloudinaryImageId} />
            </div>
            <div className="product-description">
                <h1 className="trim-text">{restaurant.info.name}</h1>
                <h2 className="trim-text">{(restaurant.info.cuisines).join(', ')}</h2>
                <div style={{ display: "flex", justifyContent: "space-between", }}>
                    <h5>{restaurant.info.locality}</h5>
                    <h3>{restaurant.info.avgRating} stars</h3>
                </div>
            </div>
        </div>
    )
};

export const isVeg = (Product) => {
    return ({restaurant}) => {
        console.log(restaurant.info.cloudinaryImageId);
        
        return (
            <div className="relative">
                <div className="absolute top-3 left-3 bg-white border-2 border-green-400 rounded">🟢</div>
                <Product restaurant={restaurant}/>
            </div>
        )
    }
}

export default Product;