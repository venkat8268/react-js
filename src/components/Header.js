import { Link } from "react-router-dom" 

const Header = () => {
    return (
        <header className="site-header">
            <div className="site-identity">
                <h1><Link to="/">React Store</Link></h1>
            </div>
            <nav className="site-navigation">
                <ul className="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;