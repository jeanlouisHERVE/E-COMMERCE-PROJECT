import './App.css';

//import utils
import { Component } from 'react';
import { Routes , Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from '../../firebase/utils';
import { setCurrentUser } from '../../redux/user/user.actions';

//import components 
import HomePage from '../../pages/homepage';
import ShopPage from '../../pages/shop';
import Header from '../../components/Header';
import SignInAndSignUp from '../../pages/sign-in-and-sign-up';



class App extends Component {

  // constructor () {
  //   super (); 
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        });
      }
      setCurrentUser(userAuth); 
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
            {/* <Route exact path="/signin" render={() => this.props.currentUser ? (<Navigate to="/"/>) : <SignInAndSignUp/>} /> */} 
            {/* revoir comment rediriger un utilisateur connecté sur homepage et non SignIn avec react-router-dom V6 */}
        </Routes>
      </div> 
    )
  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapsDispachToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect (mapStateToProps, mapsDispachToProps)(App);
