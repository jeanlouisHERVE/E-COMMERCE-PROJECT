import './styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// import components
import CustomButton from '../CustomButton'; 
import CartItem from '../CartItem';

const CartDropdown = ({cartItems}) => ( 
  <div className="cart-dropdown">
    <div className="cart-items">
    {
      cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
    }
    </div>
    <CustomButton>go to checkout</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
  


export default connect (mapStateToProps)(CartDropdown);