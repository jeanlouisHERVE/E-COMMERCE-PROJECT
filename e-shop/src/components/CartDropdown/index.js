import './styles.scss';

// import components
import CustomButton from '../CustomButton'; 

const CartDropdown = () => ( 
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>go to checkout</CustomButton>
  </div>
)

export default CartDropdown;