import {useState, useEffect} from "react"; 
import axios from 'axios';
import { Link } from 'react-router-dom';


const ItemsList = () => {
     const [items, setItems] = useState([]);

     useEffect(()=> {
       axios.get('https://nc-marketplace.herokuapp.com/api/items')
       .then(response => {
           console.log(response.data.items); 
          setItems(response.data.items)
       })
    },[])  

   

    return (
        <main>
            <div>
            <ul>
             {items.map((item)=>{
                return (
                   <li key={item.item_id}>
                   <p>{item.item_name}</p>
                   <Link to={`/items/:${item.item_id}`}>
                   <img src={item.img_url} alt={item.item_name}></img>
                   </Link>
                   
                   </li>
                   )
               }
             )}
            </ul>
            </div>
        </main>
    );
};

export default ItemsList;