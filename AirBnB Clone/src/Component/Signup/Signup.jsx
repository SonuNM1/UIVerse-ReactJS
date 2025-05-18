import React, { useState } from 'react';
import './Signup.css';
import { IoPersonAddSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">

      {/* Left Section */}

      <div className="signup-left">
        <h2>Join Us Today!</h2>
        <img src="/signup.avif" alt="Signup illustration" />
      </div>

      {/* Right Section - Signup Form */}
      <form className="signup-form" onSubmit={(e) => {
        e.preventDefault();
        alert('Account created successfully!');
      }}>
        <h2 className="form-title"><IoPersonAddSharp />Sign Up Page</h2>

        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" placeholder="Enter your username" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            placeholder="Enter password" 
            required 
          />
          <span className="password-toggle" onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <div className="form-group password-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input 
            type={showConfirmPassword ? 'text' : 'password'} 
            id="confirm-password" 
            placeholder="Confirm password" 
            required 
          />
          <span className="password-toggle" onClick={() => setShowConfirmPassword(prev => !prev)}>
            {showConfirmPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button className="signup-btn" type="submit">
          <IoPersonAddSharp /> Create Account
        </button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
