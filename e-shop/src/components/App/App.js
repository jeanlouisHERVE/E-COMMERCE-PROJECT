
import { Routes , Route } from 'react-router-dom';
import './App.css';

import HomePage from '../../pages/homepage';
import ShopPage from '../../pages/shop';


const App = () => (
  <div className="App">
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" exact element={<ShopPage/>}/>
    </Routes>
  </div> 
);

export default App;
