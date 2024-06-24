// src/components/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducer/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const currentUser = useSelector((state:any) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className='login'>
      <h3>Home</h3>
      {currentUser ? (
        <div>
          <p>User name: {currentUser.userName}</p>
          <p>Email: {currentUser.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
