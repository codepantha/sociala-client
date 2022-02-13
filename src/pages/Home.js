import React from 'react';
import { Feed, Rightbar, Sidebar } from '../components';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home;