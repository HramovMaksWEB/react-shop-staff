import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className='footer-container'>
          <section className='footer-left'>
            <h2>Staff</h2>
            <p>О нас</p>
            <p>Контакты</p>
            <p>Личный кабинет</p>
          </section>
          <section className='footer-center'>
          <p>8 (800) 555-55-55</p>
          <p>info@site.ru</p>
          <p>г. Москва, ул. Ленина, д. 1</p>
          <p>Пн-Пт: 9:00 - 18:00</p>
          </section>
          <section className='footer-right'>
            <p>Все права защищены</p>
            <p>Лицензия</p>
            <p>Отзывы</p>
          </section>
        </div>
        </div>
    </footer>
  )
}
