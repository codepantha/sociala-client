import React from 'react';
import './online.css';

const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="righbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt="profileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
