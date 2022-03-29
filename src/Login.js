import React from 'react'
import './Style.css'
import Logo from './assets/logo.png'

function Login() {
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
            <button className='btn-login'>Login</button>
            <label>Register</label>
          </div>
        </div>

        <div className='login-right'>
          <div className='right'>
            <div className='right-main'>
              <h3>Login</h3>
              <div>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
              </div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login