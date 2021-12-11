import './styles.scss';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../PreviewCollection';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    { collections.map(({id, ...otherCollectionProps}) => (
      <PreviewCollection key={id} {...otherCollectionProps}/> 
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections : selectCollections
})

export default connect (mapStateToProps) (CollectionsOverview);
