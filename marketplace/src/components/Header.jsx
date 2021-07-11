import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';

const Header = () => {
    const {user} = useContext(UserContext);

    return (
        <nav className="Nav">
            <div>
            <Link className="Nav_link" to="/"> <i class="fas fa-store"></i> MarketPlace</Link>
            </div>

            <div>
            <Link className="Nav_link" to="/items">Items</Link>
            <Link className="Nav_link" to="/categories">Categories</Link>
            <Link className="Nav_link">Basket</Link>
            </div>
            
            <div>
            <Link className="Nav_link" to="/users">
            <span>Loggined as: {user.username}</span>
            </Link>
            </div>
        </nav>
    );
};

export default Header;