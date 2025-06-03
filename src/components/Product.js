
const Product = ({name, cuisine, location, rating, image}) => {
    
    return (
        <div className="product">
            <div className="image-container">
                <img src={image} />
            </div>
            <div className="product-description">
                <h1>{name}</h1>
                <h2>{cuisine}</h2>
                <div style={{ display: "flex", justifyContent: "space-between", }}>
                    <h5>{location}</h5>
                    <h3>{rating} stars</h3>
                </div>
            </div>
        </div>
    )
};

export default Product;