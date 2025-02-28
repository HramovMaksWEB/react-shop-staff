import styles from './Item.module.css'
const Item = ({item, onShowItem, onAdd}) => {
    return (
      <div className={styles.item}>
         <img 
              src={require(`../../img/${item.img}`)} 
              alt={item.img}  
          />
        <div className={styles.coffee}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <b>{item.price}$</b>
          <div className={styles['add-to-cart']} onClick={() => onAdd(item)}>buy</div>
        </div>
      </div> 
    );
  }


export default Item;