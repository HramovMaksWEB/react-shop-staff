import React, { Component } from 'react'

export class Contacts extends Component {
  render() {
    return (
      <div className='contacts'>
        <div className='contacts-container'>
          <div className='contacts-container-left'>
          <h1 id='h1-contacts' className='contacts-left'>СВЯЖИТЕСЬ С НАМИ!</h1>
            <section className='contacts-left'>
              <h2>По телефону</h2>
              <p>8 (800) 555-55-55</p>
            </section>
            <section className='contacts-left'>
              <h2>По почте</h2>
              <p>info@site.ru</p>
            </section>
            <section className='contacts-left'>
              <h2>Местоположение</h2>
              <p>г. Москва, ул. Ленина, д. 1</p>
            </section>
            <section className='contacts-left'>
              <h2>Рабочие часы</h2>
              <p>Пн-Пт: 9:00 - 18:00</p>
            </section>
          </div>
          <div className='contacts-container-right'>
            <form>
              <input type='text' required placeholder="Фамилия"/>
              <input type='text' required placeholder="Имя"/>
              <input type='text' required placeholder="Очество"/>
              <input type='text' required placeholder="Почта"/>
              <input type='text' required placeholder="Телефон"/>
              <input id='contacts_checkbox' type='checkbox' className='checkbox' name='checkbox'/>
              <label id='contacts_text_checkbox'>Согласен с условиями конфиденциальности</label>
              <button type='submit' id='send-information'>Оставить заявку</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts