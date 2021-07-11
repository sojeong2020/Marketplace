import { useState, useEffect } from "react";
import { fetchItemsByCategory } from "../utils/api";
import {useParams} from 'react-router-dom';



const SortedCategory = () => {
    const [sortedCategories, setSortedCategories] = useState([])
    const {category_name} = useParams();

    useEffect(()=>{
        fetchItemsByCategory(category_name).then((categories)=>{
            console.log(categories,"categories")
                setSortedCategories(categories.items)
        })
    },[category_name]);


    return (
        <main>
            <ul className="Sorted_category">
                {
                sortedCategories.map((category)=>{
                   return(
                        <li key={category.item_id}>
                            
                            <h2>{category.item_name}</h2>
                            <img className="Category_img" src={category.img_url} alt={category.item_name}></img>
                            
                        </li>
                    )
                })
                }
            </ul>
        </main>
    );
};

export default  SortedCategory;
