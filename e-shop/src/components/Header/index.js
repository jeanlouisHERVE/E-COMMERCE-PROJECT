import './styles.scss';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { auth } from '../../firebase/utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

//import components 
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
<div className="header">
  <NavLink className="logo-container" to="/">
    <Logo className="logo" />
  </NavLink>
  <div className="options">
  <NavLink 
    activeClassName="active"
    className="option" to="/shop"
  >
  SHOP
  </NavLink>
  <NavLink 
    activeClassName="active"
    className="option" to="/contact"
  >
  CONTACT
  </NavLink>
  <NavLink 
    activeClassName="active"
    className="option" to="/checkout"
  >
  CHECKOUT
  </NavLink>
  {
    currentUser ?
    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
    :
    <NavLink 
      activeClassName="active"
      className="option" to="/signin"
    >SIGN IN</NavLink>
  }
  <CartIcon />
  </div>
  { hidden ? null : <CartDropdown/>}
</div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header); 