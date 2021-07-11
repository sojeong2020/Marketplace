import {useState, useEffect} from "react"; 
import { fetchCategory } from "../utils/api";
import { Link } from 'react-router-dom';



const Category = () => {
    const [categories, setCategories] = useState([]);
   

    useEffect(()=> {
        fetchCategory().then((categories)=>{
         setCategories(categories)
        })
        },[])

return (
        <div>
            <ul className="Category_list">
                {categories.map((category,idx)=>{
                    return(
                        <li key={idx}>
                            <Link to ={`/categories/${category.category_name}`}>
                            <h2>{category.category_name}</h2>

                            </Link>
                        </li>
                    )
                })} 
            </ul>
          
            
        </div>
    );
};

export default Category;