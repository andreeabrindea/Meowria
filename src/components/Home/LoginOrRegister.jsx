import React from 'react'
import { Link } from 'react-router-dom';

const LoginOrRegister = () => {
  return (
    <>
      <h1>Register or Log into your account</h1>
      <p>By creating an account you can keep track of your symptoms over time.</p>
      <div className='links-wrapper'>
        <Link to="/login" style={{textDecoration: "none"}}><p className='action-button'>Login</p></Link>
        <Link to="/register" style={{textDecoration: "none"}}><p className='action-button'>Register</p></Link>
      </div>
    </>
  )
}

export default LoginOrRegister
