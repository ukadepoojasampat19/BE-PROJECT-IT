import React from 'react'
import "./CSS/LoginSignup.css"
import { Link } from 'react-router-dom'
const LoginSignup = () => {
  return (
    <div className='loginsighup'>
      <div className="loginsighnup-container">
        <h1>Signup</h1>
         <div className="loginsighup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Enter Password' />
          <button>Sign Up</button>
          <p className='loginsighup-login'>Already have an Account?<span><Link to="/login">Login</Link></span></p>
          <div className="loginsignup-agree">
            <input className='checkbox' type="checkbox" name='' id='' />
            <p>By continuing I agree to terms and privacy policy!</p>
          </div>
         </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
