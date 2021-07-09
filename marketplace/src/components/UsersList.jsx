import {useState, useEffect, useContext} from 'react';
import {fetchUsers} from '../utils/api';
import { UserContext } from '../contexts/User';
import avatar from '../images/avatar.jpg';
import Kudos from './Kudos';



const UsersList = () => {
    const [users,setUsers] = useState([]);
    const {setUser} = useContext(UserContext);

useEffect(()=>{
    fetchUsers().then((usersFromApi)=>{
        setUsers(usersFromApi)
    })
},[])


    return (
        <main className="Users">
            <h2>Change user</h2>
            <ul className="Users_list">
                {users.map((user)=>{
                    return(
                        <li key={user.username}>
                        <p>{user.username}</p>
                        <img className="Users_img" 
                        src={user.avatar_url === "" 
                         || user.avatar_url === "test" 
                         ||  user.avatar_url === "https://test"
                         ||  user.avatar_url === null 
                         ||  user.avatar_url === "https://image"? avatar : user.avatar_url}
                        alt={user.username}></img>
                        <Kudos kudos={user.kudos} username={user.username} />
                        <button 
                        onClick={()=>{
                            setUser(user)
                        }}
                        >
                            Select User</button>
                        </li>
                    )
                   }
                )}
            </ul>
        </main>
    );
};

export default UsersList;