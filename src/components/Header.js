import { Link } from "react-router-dom"
import useOnlineStatus from "./hooks/useOnlineStatus"
import { useContext } from "react";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const isOnline = useOnlineStatus();
    const userData = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);    
        
    return (
        <header className="site-header">
            <div className="site-identity">
                <h1><Link to="/">React Store</Link></h1>
            </div>
            <nav className="site-navigation">
                <ul className="nav">
                    {/* <li><Link to="/about">About</Link></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li className="font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <li>User status : {isOnline ? "🟢" : "🔴"}</li>
                    <li className={`font-extrabold ${isOnline ? `text-green-600` : `text-red-600`}`}>{ userData.loggedInUser }</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 