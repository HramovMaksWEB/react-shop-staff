import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <section className={styles['footer-left']}>
          <h2><Link to="/react-shop-staff">Staff</Link></h2>
          <p><Link to="/about">О нас</Link></p>
          <p><Link to="/contacts">Контакты</Link></p>
          <p><Link to="/lk">Личный кабинет</Link></p>
        </section>
        <section className={styles['footer-center']}>
          <p>8 (800) 555-55-55</p>
          <p>info@site.ru</p>
          <p>г. Москва, ул. Ленина, д. 1</p>
          <p>Пн-Пт: 9:00 - 18:00</p>
        </section>
        <section className={styles['footer-right']}>
          <p>Все права защищены</p>
          <p>Лицензия</p>
          <p>Отзывы</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;