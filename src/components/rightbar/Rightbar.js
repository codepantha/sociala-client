import React from 'react';
import "./rightbar.css";
import { v4 as uuidv4 } from 'uuid';
import { users } from '../../fakeData';
import { Online } from '..';

const Rightbar = () => {
  return (
    <section className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="gift" />
          <p className="birthdayText">
            <b>Jane Aniston</b> and <b>2 other friends</b> have a birthday today
          </p>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="ad" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map(user => (
            <Online key={uuidv4} user={user}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Rightbar;
