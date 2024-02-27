import React, { useState } from 'react';
import { loginUser } from '../services/Userapi';
import './Userlogin.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      navigate('/userEvent');
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login">
          <div>
            <h1>Evento User Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label">Email</label>
              <input
                className="input-form"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                className="input-form"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
          <p>Dont you have an account? <Link to="/usersignup">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
