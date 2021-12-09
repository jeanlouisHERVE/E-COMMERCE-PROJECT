import './styles.scss';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ cart: {cartItems}}) => ({cartItems})

export default connect (mapStateToProps)(CartDropdown);