import shopOpen from '../images/shopOpen.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
       <main className="Home">
           <h1> Welcome to market place</h1>
           <Link to="/items">
           <img className="Home_img" src={shopOpen} alt="open-sign"></img>
           </Link>
       </main>
    );
};

export default Home;