import React from 'react';
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import './topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <section className="topbarContainer">
      <div className="topbarLeft">
        <Link style={{ textDecoration: 'none' }} to="/">
          <span className="logo">Sociala</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input type="text" className="searchInput" placeholder="Search a for friend, post or video" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarImgContainer">
          <img src="/assets/people/1.jpg" alt="profile-pic" className="topbarImg" />
        </div>
      </div>
    </section>
  )
}

export default Topbar