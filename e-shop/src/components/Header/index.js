import './styles.scss';

import { Link } from 'react-router-dom';
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
  <Link className="logo-container" to="/">
    <Logo className="logo" />
  </Link>
  <div className="options">
  <Link className="option" to="/shop">
  SHOP
  </Link>
  <Link className="option" to="/contact">
  CONTACT
  </Link>
  <Link className="option" to="/checkout">
  CHECKOUT
  </Link>
  {
    currentUser ?
    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
    :
    <Link className="option" to="/signin">SIGN IN</Link>
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