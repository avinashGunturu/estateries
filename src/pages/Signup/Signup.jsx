import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
  return (
    <div className="login-container">
      <div className='container'>
        <h2>SIGN UP</h2>
        <div className="input-container">
        <input type="text" placeholder='Enter Email' />
        <input type="password" placeholder='Password' />
        <input type="text" placeholder='Enter mobile Number' />
        </div>
        <p>Already have an Account ?  <Link to='/Login'>Login</Link></p>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Signup