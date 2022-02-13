import React from 'react';
import "./rightbar.css";
import { v4 as uuidv4 } from 'uuid';
import { users } from '../../fakeData';
import { Online } from '..';

const Rightbar = ({ profile }) => {
  // the rightbar that displays when on homepage
  const HomeRightBar = () => {
    return (
      <>
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
            <Online key={uuidv4()} user={user}/>
          ))}
        </ul>
      </>
    );
  };

  // the rightbar that displays when on profile page
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Data</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">NY</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">from:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/people/1.jpg" alt="" className="rightbarFollowingImg" />
            <p className="rightbarFollowingName">Ricky Sander</p>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/2.jpg" alt="" className="rightbarFollowingImg" />
            <p className="rightbarFollowingName">Ricky Sander</p>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/3.jpg" alt="" className="rightbarFollowingImg" />
            <p className="rightbarFollowingName">Ricky Sander</p>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/4.jpg" alt="" className="rightbarFollowingImg" />
            <p className="rightbarFollowingName">Ricky Sander</p>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/5.jpg" alt="" className="rightbarFollowingImg" />
            <p className="rightbarFollowingName">Ricky Sander</p>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/6.jpg" alt="" className="rightbarFollowingImg" />
            <p className="rightbarFollowingName">Ricky Sander</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar /> }
      </div>
    </section>
  );
};

export default Rightbar;
