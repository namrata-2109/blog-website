import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <div className="login-page">
        <div className='login-box'>
            <h2>Login</h2>
            <form>
                <input type = 'text' placeholder='Enter your name...' required/><br/>
                <input type = 'email' placeholder='Enter your e-mail...' required/><br/>
                <input type = 'password' placeholder='Password' required/><br/>
            </form>
        </div>
    </div>);
};

export default Login;
