import { images, text } from '../data'
import Slider from '../Slider/Slider'
import styles from './About.module.css'

const About = () => {
    return (
      <div className={styles.About}>
        <Slider images={images} text={text}/>
        <div className={styles['about_container']}>
        <img className={styles.staff} src={require(`../../img/staff.png`)} alt="Staff" />
          <div className={styles['about_text_container']}>
            <h2>С нами комфортно!</h2>
            <p className={styles['about_text']}>Добро пожаловать в магазин мебели "Staff" — ваше идеальное решение для создания уютного и стильного пространства! Мы специализируемся на продаже высококачественной мебели, которая сочетает в себе современный дизайн, функциональность и комфорт. Наша цель — помочь вам воплотить ваши мечты о идеальном интерьере в реальность.
              В "Staff" мы понимаем, что мебель — это не просто предметы, а важные элементы вашего дома или офиса. Поэтому мы предлагаем только надежные и долговечные материалы, отборный ассортимент, который удовлетворяет самым разнообразным вкусам и потребностям. От стильных sofas до практичных шкафов — у нас вы найдете все для обустройства вашего пространства.
            </p>
          </div>
        </div>
      </div>
    )
  }

export default About