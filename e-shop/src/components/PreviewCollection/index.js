import './styles.scss'; 
import ItemCollection from '../../components/ItemCollection';

const PreviewCollection = ({title, items} ) => {

return (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
    {
      items
      .filter((item, idx) => idx < 4)
      .map(({id, ...otherItemProps}) => (
        <ItemCollection key={id} {...otherItemProps} />
      ))
    }
    </div>
  </div>
  )
}

export default PreviewCollection;