import { Link } from "react-router-dom"
import useOnlineStatus from "./hooks/useOnlineStatus"

const Header = () => {
    const isOnline = useOnlineStatus();
    console.log(isOnline);
    
    
    return (
        <header className="site-header">
            <div className="site-identity">
                <h1><Link to="/">React Store</Link></h1>
            </div>
            <nav className="site-navigation">
                <ul className="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>User status : {isOnline ? "🟢" : "🔴"}</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;