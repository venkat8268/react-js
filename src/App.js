import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/AboutClass";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Dynamic importing 
const About = lazy(() => import('./components/AboutClass'))

// Create a Headers, Body, Footer component and import it here

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: 
                <Suspense fallback={<h1>Loading</h1>}>
                    <About name={"Venkatesh"} />
                </Suspense>
                ,
            },
            {
                path: "/restaurant/:id",
                element: <Restaurant />,
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);