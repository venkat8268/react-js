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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);