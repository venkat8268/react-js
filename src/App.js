import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/AboutClass";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Contact from "./components/Contact";

// Dynamic importing 
const About = lazy(() => import('./components/AboutClass'))

// Create a Headers, Body, Footer component and import it here

const Root = () => {

    // https://startling-cendol-e20a64.netlify.app/
    
    const [userName, setUserName] = useState("");
    
    const user = useContext(UserContext);
    
    useEffect(() => {        
        if (user.loggedInUser) {
            setUserName(user.loggedInUser);
        }
    }, [])
    
    return (
        <>
            <Provider store={appStore} >
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);