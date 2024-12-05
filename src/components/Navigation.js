import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import React, { useState } from 'react';
import Order from './Order';

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(element => summa += Number.parseFloat(element.price));
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <div className='summa-container'>
                <span className="summa">Общая сумма: </span>
                <span className='number_summa'>{new Intl.NumberFormat().format(summa)}$</span>
            </div>
        </div>
    );
}

const showNothing = () => {
    return (
        <div className='empty'>В корзине пока нет товаров</div>
    );
}

function Navigation(props) {
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div className='navigation'>
            <header className='header'>
                <span className='logo'><Link to="/react-shop-staff">Staff</Link></span>
                <ul className='nav'>
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li><Link to="/LK">Личный кабинет</Link></li>
                </ul>
                <FaShoppingCart onClick={() => setCardOpen(prev => !prev)} className={`shop-card-button ${cardOpen ? "active" : ""}`} />
                {cardOpen && (
                    <div className='shop-card'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </header>
        </div>
    );
}

export default Navigation;