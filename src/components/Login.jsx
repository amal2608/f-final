
import React, { useState } from 'react';
import './Main.css';
import { TextField } from '@mui/material';
import { TextArea } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import Layout from '../components/Layout';

const Login = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const ReadEmail = (event) => {
    console.log(event.target.value);
    setMail(event.target.value);
  };

  const ReadPass = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
  };

  const CheckError = () => {
    const fixedUsername = 'admin'; // Set your fixed admin username
    const fixedPassword = 'admin123'; // Set your fixed admin password

    if (mail.trim() === fixedUsername && pass === fixedPassword) {
      window.location.href = '/home';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='background-3'>
      <center>
        <h1> LOGIN </h1>
        Username :&nbsp;{' '}
        <input
          type='email'
          onChange={ReadEmail}
          name='eml'
          id='em'
          placeholder='username'
        />
        <br />
        <br />
        Password :&nbsp;{' '}
        <input
          type='password'
          onChange={ReadPass}
          name='pass'
          id='pwd'
          placeholder='password'
        />
        <br />
        <br />
        <button onClick={CheckError}>LOGIN</button>
        <br />
        <br />
        {error}
      </center>
    </div>
  );
};

export default Login;