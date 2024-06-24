// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducer/authSlice';
import { useNavigate } from 'react-router-dom';
import '../login.css'
const users = [
  {
    id: 1,
    userName: "dung",
    email: "dung@emailcom",
    password: "123"
  },
  {
    id: 2,
    userName: "dungcute",
    email: "111@emailcom",
    password: "d1231"
  },
  {
    id: 3,
    userName: "ccc",
    email: "c@emailcom",
    password: "123123"
  },

];

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      dispatch(login(user));
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login'>
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
