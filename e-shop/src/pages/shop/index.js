import { Component } from 'react';
import PreviewCollection from '../../components/PreviewCollection';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections : SHOP_DATA
    } 

    console.log(this.state.collections)

  }
  render () {
    const {collections} = this.state;
    return (
      <div className="shop-page">
       { collections.map(({id, ...otherCollectionProps}) => (
         <PreviewCollection key={id} {...otherCollectionProps}/> 
       ))}
      </div>
    )
  }

}

export default ShopPage;