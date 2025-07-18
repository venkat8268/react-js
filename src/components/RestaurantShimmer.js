export const RestaurantShimmer = () => {
    return (
        <>
            <div className="product-shimmer" data-testid="productShimmer">
                {Array(10).fill("").map((e, index) => (
                    <div key={index} className="product animate">
                        <div className="image-container"></div>
                        <div className="product-description"></div>
                    </div>
                ))}
            </div>
        </>
    )
}