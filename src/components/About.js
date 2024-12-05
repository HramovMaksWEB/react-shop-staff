import React, { Component } from 'react'
import Slider from './Slider'

export class About extends Component {
  images = [
    require(`../img/Slider1.png`),
    require(`../img/Slider2.png`),
    require(`../img/Slider3.png`)
  ]
  text = [
    "Индивидуальный дизайн для каждого клиента",
    "Опытная комманда проектировщиков",
    "Самые современные технологии",
  ]

  render() {
    return (
      <div className='About'>
        <Slider images={this.images} text={this.text}/>
        <div className='about_container'>
        <img className='staff' src={require(`../img/staff.png`)} alt="Staff" />
          <div className='about_text_container'>
            <h2>С нами комфортно!</h2>
            <p className='about_text'>Добро пожаловать в магазин мебели "Staff" — ваше идеальное решение для создания уютного и стильного пространства! Мы специализируемся на продаже высококачественной мебели, которая сочетает в себе современный дизайн, функциональность и комфорт. Наша цель — помочь вам воплотить ваши мечты о идеальном интерьере в реальность.
              В "Staff" мы понимаем, что мебель — это не просто предметы, а важные элементы вашего дома или офиса. Поэтому мы предлагаем только надежные и долговечные материалы, отборный ассортимент, который удовлетворяет самым разнообразным вкусам и потребностям. От стильных sofas до практичных шкафов — у нас вы найдете все для обустройства вашего пространства.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About