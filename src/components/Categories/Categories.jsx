import { categories } from "../data";
import styles from './Categories.module.css'

const Categories = ({chooseCategory}) => {
    return (
        <div className={styles.categories}>
            {categories.map(el => (
                <div 
                    key={el.key} 
                    onClick={() => chooseCategory(el.key)}
                    className={styles.category}
                >
                    {el.name}
                </div>
            ))}
        </div>
    );
};
        
export default Categories;