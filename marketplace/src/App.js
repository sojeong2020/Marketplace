import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import SingleItem from './components/SingleItem';

function App() {
  return (
    <BrowserRouter>
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
         <SingleItem />
       </Route>
     </Switch>
     </div>
    </BrowserRouter>
   
  );
}

export default App;
