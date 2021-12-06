
import { Component } from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';

import HomePage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import Header from '../../components/Header';
import SignInAndSignUp from '../../pages/sign-in-and-sign-up';
import { auth } from '../../firebase/utils';


class App extends Component {

  constructor () {
    super (); 
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render( ) {
    return(
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/shop" exact element={<ShopPage/>}/>
            <Route path="/signin" exact element={<SignInAndSignUp/>}/>
        </Routes>
      </div> 
    )
  }
};

export default App;
