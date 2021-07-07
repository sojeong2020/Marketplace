import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="Nav">
            <Link className="Nav_link" to="/">MarketPlace</Link>
            <Link className="Nav_link" to="/items">Items</Link>
        </nav>
    );
};

export default Header;