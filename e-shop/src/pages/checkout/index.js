import './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">
        <span>Products</span>
      </div>
      <div className="checkout-block">
        <span>Description</span>
      </div>
      <div className="checkout-block">
        <span>Quantity</span>
      </div>
      <div className="checkout-block">
        <span>Price</span>
      </div>
      <div className="checkout-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => 
        cartItem.name
      )
    }
    <div className="total">
      <span>TOTAL : ${total}</span>
    </div>
   
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect (mapStateToProps) (CheckoutPage); 