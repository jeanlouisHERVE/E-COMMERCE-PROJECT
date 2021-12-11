import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../../components/PreviewCollection';

const ShopPage = ({ collections }) => (

  <div className="shop-page">
    { collections.map(({id, ...otherCollectionProps}) => (
      <PreviewCollection key={id} {...otherCollectionProps}/> 
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections : selectCollections
})

export default connect (mapStateToProps) (ShopPage);