import axios from 'axios';

export const fetchItems = ()=>{
    return axios
    .get('https://nc-marketplace.herokuapp.com/api/items')
    .then((response)=> {
        return response.data.items;
    })
}

export const fetchItemById = (item_id) =>{
    return axios
    .get(`https://nc-marketplace.herokuapp.com/api/items/${item_id}`)
    .then((response)=>{
        return response.data.item;
    })
}

export const fetchCategory = () =>{
    return axios
    .get('https://nc-marketplace.herokuapp.com/api/categories')
    .then((response)=>{
        return response.data.categories;
    })
}

export const fetchItemsByCategory = (category_name) =>{
    return axios
    .get(`https://nc-marketplace.herokuapp.com/api/items?category_name=${category_name}`)
    .then((response)=>{
        return response.data;
    })
}

export const fetchUsers = () =>{
    return axios
    .get('https://nc-marketplace.herokuapp.com/api/users')
    .then((response)=>{
        console.log(response.data.users)
        return response.data.users
    })
}