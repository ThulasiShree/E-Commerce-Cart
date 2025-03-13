import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsigngup'>
        <div className="loginsignup-container">
            <h1>Sing UP</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Enter Name'/>
                <input type="email" placeholder='Enter E-Mail' />
                <input type="password" placeholder='Enter Password' />
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>
                Already have an Account?
                <span>Login here</span>
            </p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id=''/>
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup 