import {useState, useEffect} from "react"; 
import { Link } from 'react-router-dom';
import { fetchItems } from "../utils/api";


const ItemsList = () => {
     const [items, setItems] = useState([]);
     

     useEffect(()=> {
         fetchItems().then((itemsFromApi)=>{
             setItems(itemsFromApi);
         });
     },[]);
      
return (
        <main>
            
            <ul className="Items_list">
             {items.map((item)=>{
                return (
                   <li key={item.item_id}>
                   <p>{item.item_name}</p>
                   <Link 
                   to={`/items/${item.item_id}`} >
                   <img className="Items_img" src={item.img_url} alt={item.item_name} ></img>
                   </Link>
                   
                   </li>
                   )
               }
             )}
            </ul>
            
        </main>
    );
};

export default ItemsList;