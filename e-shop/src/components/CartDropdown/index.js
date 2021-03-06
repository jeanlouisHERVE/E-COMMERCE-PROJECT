import './styles.scss';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';

// import components
import CustomButton from '../CustomButton'; 
import CartItem from '../CartItem';

const CartDropdown = ({cartItems, dispatch}) => {

  let navigate = useNavigate();

  function handleClick() {
    navigate('./checkout');
  }
  

  return (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
          cartItems.length ? (
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>
            )))
          : 
          (<span className="empty-message">Your cart is empty</span>)
        }
        </div>
        <CustomButton 
          onClick={() => {handleClick(); dispatch(toggleCartHidden());}}> go to checkout</CustomButton>
    </div>
  )
} 


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


  

export default connect (mapStateToProps)(CartDropdown);
