import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import SingleItem from './components/SingleItem';
import Category from './components/Category';
import SortedCategory from './components/SortedCategory';
import {UserContext} from './contexts/User';
import UsersList from './components/UsersList';
import Kudos from './components/Kudos';
import Basket from './components/Basket';


function App() {
  const [user,setUser]=useState(
    {
      "username": "Paul-C",
      "avatar_url": "https://example.com/Paul-C.jpg",
      "kudos": 2
    }
  );

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
    <div className="App">
     <Header />
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/items">
         <ItemsList />
       </Route>
       <Route exact path="/items/:item_id">
         <SingleItem user={user}/>
       </Route>
       <Route exact path="/categories">
        <Category />
       </Route>
       <Route exact path ="/categories/:category_name">
         <SortedCategory />
       </Route>
       <Route exact path="/users">
         <UsersList setUser={setUser} />
       </Route>
       <Route  exact path="/users/:username">
         <Kudos />
       </Route>
       <Route exact path ='/users/:username/basket'>
         <Basket user={user} />
       </Route>
       <Route>
         <p>404 - Not Found</p>
       </Route>
     </Switch>
     </div>
     </UserContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;
