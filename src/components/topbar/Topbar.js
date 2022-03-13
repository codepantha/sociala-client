import React from 'react';
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import './topbar.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;
  const { data: userLoggedIn } = useSelector(state => state.loginReducer)
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
          <Link to={"profile/"+userLoggedIn.username}>
            <img src={assets + userLoggedIn?.profilePic} alt="profile-pic" className="topbarImg" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Topbar