
import Item from '../Item/Item'

const Items = ({items, onAdd, onShowItem}) =>{
    return (
      <main>
        {items.map(el => (
            <Item onShowItem = {onShowItem} key={el.id} item = {el} onAdd={onAdd}/>
        ))}
      </main>
    )
  }

export default Items