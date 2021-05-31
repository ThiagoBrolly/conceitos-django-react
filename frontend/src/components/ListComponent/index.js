import ItemComponent from "../ItemComponent";

function ListComponent({listName, items}) {
  return (
    <div>
      <h2>{listName}</h2>
      <ul>        
        {items.map(item => <ItemComponent key={item.id} name={item.name} status={item.done} />)}
      </ul>
    </div>
  )
}

export default ListComponent;