
import { Component } from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';

import HomePage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import Header from '../../components/Header';
import SignInAndSignUp from '../../pages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from '../../firebase/utils';


class App extends Component {

  constructor () {
    super (); 
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        });
      }
      this.setState({currentUser: userAuth}); 
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div className="App">
        <Header/>
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
