import { useState,useEffect,useContext} from 'react';
import { fetchBasketByUsername } from '../utils/api';
import { UserContext } from '../contexts/User';


const Basket = () => {
    const [basket,setBasket] =useState([]);
    const {user}= useContext(UserContext);
    console.log(user)
    
    useEffect (()=>{
        fetchBasketByUsername(user.username).then((basket)=>{
            console.log(basket);
            setBasket(basket)
        })
    },[])
    return (
        <div>
            <h2>Basket</h2>
        {console.log(basket.items)}

            <p>Items: {basket.items.length}</p>
        </div>
    );
};

export default Basket;