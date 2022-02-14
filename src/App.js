import React from 'react';
import { Home, Login, Profile, Register } from './pages';
import { Route, Routes } from 'react-router-dom';
import './style.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
      
    </>
  )
}

export default App