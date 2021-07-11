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
            
            <ul>
             {items.map((item)=>{
                return (
                <div className="Items_list">
                   <li key={item.item_name}>
                   <p>{item.item_name}</p>
                   <Link 
                   to={`/items/${item.item_id}`} >
                   <img className="Items_img" src={item.img_url} alt={item.item_name} ></img>
                   </Link>
                   </li>
                </div>
                      )
               }
             )}
            </ul>
            
        </main>
    );
};

export default ItemsList;