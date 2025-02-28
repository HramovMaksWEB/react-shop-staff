// Lk.js
import styles from './Lk.module.css';

const Lk = () => {
    return (
        <div className={styles.lk}>
            <div className={styles.avtorizathion}>
                <h2 className={styles.login}>Вход в личный кабинет</h2>
                <p className={styles.description}>Пожалуйста, введите свои учетные данные для входа.</p>
                <form>
                    <input type="text" required name="login" placeholder="Логин" />
                    <input type='password' required name='password' placeholder='Пароль' />
                    <div className={styles['checkbox_container']}>
                        <input type='checkbox' className={styles.checkbox} name='checkbox' />
                        <label>Согласен с условиями конфиденциальности</label>
                    </div>
                    <button type='submit' className={styles['button_avtorization']}>Войти</button>
                </form>
                <div className={styles.links}>
                    <a href="/forgot-password" className={styles.link}>Забыли пароль?</a>
                    <span className={styles.separator}>|</span>
                    <a href="/register" className={styles.link}>Создать аккаунт</a>
                </div>
                <p className={styles.additionalText}>
                    Если у вас нет аккаунта, вы можете зарегистрироваться, чтобы получить доступ ко всем функциям нашего сервиса. Регистрация занимает всего несколько минут!
                </p>
            </div>
        </div>
    );
}

export default Lk;