import React from 'react'
import './assets/Register.css'
import Logo from './assets/logo.png'

function Register() {
  return (
    <div className="login">
      <div className='login-main'>
        <div className='login-left'>
          <div className='login-logo'>
            <img src={Logo} alt="logo"></img>
          </div>
          <h1>Easy, Fast and Reliable</h1>
          <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
          <div>
            <label>Register</label>
            <button className='btn-login'>Register</button>
          </div>
        </div>

        <div className='login-right'>
          <div className='right'>
            <div className='right-main'>
              <h3>Register</h3>
              <div>
                <input type='text' placeholder='name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
              </div>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;