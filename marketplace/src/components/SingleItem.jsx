import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { fetchItemById } from "../utils/api";

const SingleItem = () => {
    const [item, setItem] = useState({});
    const {item_id} = useParams();

    useEffect(()=>{
        fetchItemById(item_id).then((item)=>{
            console.log(item)
            setItem(item);
        })
    },[item_id]);

    return (
       <main className="Item">
          
           <h2>{item.item_name}</h2>
           <img className="Item_img" src={item.img_url}alt={item.item_name}></img>
           <p>{item.description}</p>
           <p>{item.price}</p>
           <button>Add to the basket</button>
           <button>Order now</button>

       </main>
    );
};

export default SingleItem;