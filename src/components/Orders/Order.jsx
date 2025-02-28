import styles from './Orders.module.css'

import { FaTrash } from 'react-icons/fa'

const Order = ({item, onDelete}) => {
    return (
      <div className={styles.item}>
        <img 
              src={require(`../../img/${item.img}`)} 
              alt={item.img} 
          />
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        <FaTrash onClick={() => onDelete(item.id)} className={styles['delete-icon']}/>
      </div>
    )
  }

  export default Order