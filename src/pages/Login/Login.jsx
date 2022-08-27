import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <div className='container'>
        <h2>LOGIN</h2>
        <div className="input-container">
        <input type="text" placeholder='Enter Email' />
        <input type="password" placeholder='Password' />
        </div>
        <p>Forget password ?</p>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login