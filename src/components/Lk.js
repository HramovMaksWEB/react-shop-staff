import React, { Component } from 'react'

export class Lk extends Component {
  render() {
    return (
      <div className='lk'>
        <div className='avtorizathion'>
          <h2 className='login'>Login</h2>
          <form>
            <input type="text" required name="login" placeholder="login"/>
            <input type='text' required name='password' placeholder='password'/>
            <div className='checkbox_container'>
              <input type='checkbox' className='checkbox' name='checkbox'/>
              <label>Согласен с условиями конфиденциальности</label>
            </div>
            <button type='submit' className='button_avtorization'>Войти</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Lk