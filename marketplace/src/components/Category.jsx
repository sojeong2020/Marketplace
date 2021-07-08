import {useState, useEffect} from "react"; 
import axios from 'axios';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        axios.get('https://nc-marketplace.herokuapp.com/api/categories')
        .then(response => {
            console.log(response.data.categories); 
           setCategories(response.data.categories)
        })
     },[]) 

    return (
        <div>
            <ul className="Category_list">
                {categories.map((category,idx)=>{
                    return(
                        <li key={idx}>
                            <p>{category.category_name}</p>
                        </li>
                    )
                })} 
            </ul>
            
        </div>
    );
};

export default Category;