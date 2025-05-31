import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    'h1',
    {
        id: "heading"
    },
    'Rendering heading from react'
);

// JSX => React.createElement => Object => Html(DOM)

const heading2 = <h2 id="heading2" className="heading2">Heading with Jsx</h2>;

// Functional components

const Title = () => (
    <h3 style={{ backgroundColor: 'yellow' }}>Title with Functional component</h3>
);

const Subtitle = () => (
    <>
        <h3>Subtitle with Functional component and different declaration</h3>
        <h4>Another subtitle</h4>
    </>
);


const HeadingComponent = () => (
    <div>
        {heading}
        <Title />
        {Subtitle()}
        <h1>Heading with functional component</h1>
    </div>
);

const restaurantsList= [
    {
        id: 1,
        name: "The Spice Hub",
        cuisine: "North Indian, Chinese",
        rating: 4.5,
        location: "Andheri West, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 2,
        name: "Burger Bae",
        cuisine: "Burgers, Fast Food",
        rating: 4.2,
        location: "Bandra, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 3,
        name: "Sushi Central",
        cuisine: "Japanese, Asian",
        rating: 4.7,
        location: "Powai, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 4,
        name: "Pizza Palace",
        cuisine: "Italian, Pizza",
        rating: 4.1,
        location: "Lower Parel, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 5,
        name: "Tandoori Flames",
        cuisine: "Mughlai, BBQ",
        rating: 4.6,
        location: "Kurla, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 6,
        name: "Veggie Delight",
        cuisine: "Pure Veg, South Indian",
        rating: 4.3,
        location: "Dadar, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 7,
        name: "Wrap & Roll",
        cuisine: "Street Food, Rolls",
        rating: 4.0,
        location: "Ghatkopar, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 8,
        name: "Biryani Junction",
        cuisine: "Biryani, Hyderabadi",
        rating: 4.4,
        location: "Thane, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 9,
        name: "Wok This Way",
        cuisine: "Pan Asian, Thai",
        rating: 4.3,
        location: "Malad, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    },
    {
        id: 10,
        name: "Chaat Street",
        cuisine: "Snacks, Chaat",
        rating: 4.2,
        location: "Vile Parle, Mumbai",
        image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/master/pass/Untitled%20design%20(14).png"
    }
];


const Restaurant = ({id, name, cuisine, rating, location, image}) => {

    return (
        <div className="restaurants" >
            <img src={image}></img>
            <h1>{name}</h1>
            <h2>{cuisine}</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>{location}</h4>
                <h4>{rating}</h4>
            </div>
        </div>
    )
};

const RestaurantListing = () => (
    <div className="restaurantList">
        {
            restaurantsList.map(function(restaurant) {
                return <Restaurant {...restaurant} key={restaurant.id}/>
            })
        }
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RestaurantListing />);