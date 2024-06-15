// src/components/Login.js
import React from 'react';

function Login({ onLogin }) {
  return (
    <div>
      <h2>Login To Start Quiz </h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default Login;
