
import { Routes , Route } from 'react-router-dom';
import './App.css';

import HomePage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import Header from '../../components/Header';


const App = () => (
  <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" exact element={<ShopPage/>}/>
    </Routes>
  </div> 
);

export default App;
