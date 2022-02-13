import React from "react";
import "./rightbar.css";
import { v4 as uuidv4 } from 'uuid';
import { users } from "../../fakeData";

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
            <li key={uuidv4()} className="rightbarFriend">
              <div className="righbarProfileImgContainer">
                <img className="rightbarProfileImg" src={user.profilePicture} alt="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Rightbar;
