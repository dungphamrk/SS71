import React from 'react'
import BT1 from './components/BT1'
import BT2 from './components/BT2'
import BT3 from './components/BT3'
import BT4 from './components/BT4'
import BT5 from './components/BT5'
import BT6 from './components/BT6'
import BT7 from './components/BT7'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
export default function App() {

  return (
    <div>
      <BT1/>
      <BT2/>
      <BT3/>
      <BT4/>
      <BT5/>
      <BT6/>
      <BT7/>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </div>
  )
}
