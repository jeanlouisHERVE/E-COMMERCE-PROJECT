
import { Routes , Route } from 'react-router-dom';
import './App.css';

import HomePage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import Header from '../../components/Header';
import SignInAndSignUp from '../../pages/sign-in-and-sign-up';


const App = () => (
  <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" exact element={<ShopPage/>}/>
        <Route path="/signin" exact element={<SignInAndSignUp/>}/>
    </Routes>
  </div> 
);

export default App;
