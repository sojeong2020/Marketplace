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
        console.log(response)
        return response.data.item
    })
}