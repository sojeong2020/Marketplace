import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="Nav">
            <Link className="Nav_link" to="/">MarketPlace</Link>
            <Link className="Nav_link" to="/items">Items</Link>
            <Link className="Nav_link" to="/categories">Categories</Link>

        </nav>
    );
};

export default Header;