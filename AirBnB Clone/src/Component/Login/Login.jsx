import React from 'react';
import './Login.css';
import { CgLogIn } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-container'>

      {/* Left section */}
      
      <div className='login-left'>
        <h2>Welcome Back!</h2>
        <p>Please login to your account</p>
        <img
          src='/login.jpg'
          alt='Login illustration'
        />
      </div>

      {/* Right section - login form */}
      
      <form className='login-form' onSubmit={(e) => {
        e.preventDefault();
        alert('Login successfully');
      }}>
        <h2 className='login-title'><CgLogIn /> Login</h2>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' placeholder='Enter your email' required />
        </div>

        <div className='form-group'>
          <label htmlFor='pass'>Password</label>
          <input type='password' id='pass' placeholder='Enter your password' required />
        </div>

        <button type='submit' className='login-btn'>
          <CgLogIn /> Login
        </button>

        {/* Sign up link */}

        <p className='signup-link'>
          New here? <Link to='/signup'>Register</Link>
        </p>

      </form>

    </div>
  );
};

export default Login;
