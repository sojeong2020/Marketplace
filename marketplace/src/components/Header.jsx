import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';

const Header = () => {
    const {user} = useContext(UserContext);
    console.log(user,"user in header")

    return (
        <nav className="Nav">
            <div>
            <Link className="Nav_link" to="/">MarketPlace</Link>
            <Link className="Nav_link" to="/items">Items</Link>
            <Link className="Nav_link" to="/categories">Categories</Link>
            </div>
            <Link className="Nav_user_link" to="/users">
            <span>{user.username}</span>
            </Link>
           

            

        </nav>
    );
};

export default Header;