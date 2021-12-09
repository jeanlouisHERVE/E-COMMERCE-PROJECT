import './styles.scss';
import CustomButton from '../../components/CustomButton';
 

const ItemCollection = ({ id, name, price, imageUrl}) => (

  <div className="collection-item">
    <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted >Add to cart</CustomButton>
  </div>
)

export default ItemCollection;