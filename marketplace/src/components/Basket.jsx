import {useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/User';
import { fetchBasketByUsername } from '../utils/api';


const Basket = ({basket,setBasket}) => {
    const {user} = useContext(UserContext);
   console.log(user)

    useEffect (()=>{
        fetchBasketByUsername(user.username).then((itemsFromApi)=>{
            console.log(itemsFromApi);
            setBasket(itemsFromApi);
        });
    },[]);


    return (
        <main>
            <h2>In your basket : {basket.items.length} Item(s)</h2>
            <ul className="Basket">
                {
                    basket.items.map((e)=>{
                        if(e.length !== 0){
                            return <li key={e.item_id}>
                                <p>{e.item_name}</p>
                                <img className="Basket_img" src={e.img_url} alt={e.item_name}></img>
                                <p>{e.description}</p>
                                <p>{e.price}</p>
                            </li>
                        }
                    })
                }
            </ul>



    
        </main>
    );
};

export default Basket;