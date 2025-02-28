import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import Order from '../Orders/Order';
import styles from './Navigation.module.css';

const ShowOrders = ({ orders, onDelete }) => {
    let summa = orders.reduce((total, element) => total + Number.parseFloat(element.price), 0);

    return (
        <div>
            {orders.map(el => (
                <Order onDelete={onDelete} key={el.id} item={el} />
            ))}
             <div className={styles['summa-container']}>
                <span className={styles.summa}>Общая сумма: </span>
                <span className={styles['number_summa']}>{new Intl.NumberFormat().format(summa)}$</span>
            </div>
        </div>
    );
}

const ShowNothing = () => {
    return (
        <div className={styles.empty}>В корзине пока нет товаров</div>
    );
}

function Navigation({ orders, onDelete }) {
    const [cardOpen, setCardOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.navigation}>
            <header className={styles.header}>
                <span className={styles.logo}><Link to="/react-shop-staff">Staff</Link></span>
                <FaBars className={styles.hamburger} onClick={() => setMenuOpen(true)} />
                <ul className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                    <FaTimes className={styles.close} onClick={() => setMenuOpen(false)} />
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li><Link to="/LK">Личный кабинет</Link></li>
                </ul>
                <FaShoppingCart 
                    onClick={() => setCardOpen(prev => !prev)} 
                    className={`${styles['shop-card-button']} ${cardOpen ? styles.active : ''}`} 
                />
                {cardOpen && (
                    <div className={styles['shop-card']}>
                        {orders.length > 0 ? <ShowOrders orders={orders} onDelete={onDelete} /> : <ShowNothing />}
                    </div>
                )}
            </header>
        </div>
    );
}

export default Navigation;