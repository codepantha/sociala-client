import React, { useState, useEffect } from "react";
import "./rightbar.css";
import { v4 as uuidv4 } from "uuid";
import { users } from "../../fakeData";
import { Online } from "..";
import axios from "axios";

const Rightbar = ({ user }) => {
  console.log(user);
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user?._id) {
          const result = await axios.get("/users/" + user._id + "/friends/");
          setFriends(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user?._id]);

  // the rightbar that displays when on homepage
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${assets}gift.png`} alt="gift" />
          <p className="birthdayText">
            <b>Jane Aniston</b> and <b>2 other friends</b> have a birthday today
          </p>
        </div>
        <img className="rightbarAd" src={`${assets}ad.png`} alt="ad" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map((user) => (
            <Online key={uuidv4()} user={user} />
          ))}
        </ul>
      </>
    );
  };

  // the rightbar that displays when on profile page
  const ProfileRightBar = () => {
    const relationship =
      user.relationship === 1
        ? "Single"
        : user.relationship === 2
        ? "Married"
        : "Dating";

    return (
      <>
        <h4 className="rightbarTitle">User Data</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{relationship}</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Friends</h4>
        <ul className="rightbarFollowings">
          {friends.map((friend) => (
            <li key={uuidv4()} className="rightbarFollowing">
              <img
                src={`${assets + friend.profilePic}`}
                alt=""
                className="rightbarFollowingImg"
              />
              <p className="rightbarFollowingName">{friend.username}</p>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <section className="rightbar">
      <div className="rightbarWrapper">
        {/* if user is passed in, we should assume that we're on */}
        {/* the profile page and display appropriate rightbar else homepage */}
        {user ? <ProfileRightBar user={user} /> : <HomeRightBar />}
      </div>
    </section>
  );
};

export default Rightbar;
