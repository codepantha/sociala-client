import React from 'react';
import Home from './pages/Home';
import './style.css';
import { Topbar } from './components';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <>
      <Topbar />
      {/* <Home /> */}
      <Profile />
    </>
    
  )
}

export default App