import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview';
import CategoryPage from '../category';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;