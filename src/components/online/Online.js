import React from 'react';
import './online.css';

const Online = ({ user }) => {
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="righbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={assets + user.profilePicture}
          alt="profileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
