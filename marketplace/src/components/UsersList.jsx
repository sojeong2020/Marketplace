import {fetchUsers} from '../utils/api'
import {useState, useEffect} from 'react';


const UsersList = () => {
    const [users,setUsers] = useState([]);

useEffect(()=>{
    fetchUsers().then((usersFromApi)=>{
        console.log(usersFromApi)

        setUsers(usersFromApi)
    })
},[])

    return (
        <main>
            <h2>change-user</h2>
        </main>
    );
};

export default UsersList;