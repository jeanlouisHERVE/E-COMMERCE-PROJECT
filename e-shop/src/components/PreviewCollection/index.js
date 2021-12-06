import './styles.scss'; 


const PreviewCollection = ({title, items} ) => {

return (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview"></div>
    {
      items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))
    }
  </div>
  )
}

export default PreviewCollection;