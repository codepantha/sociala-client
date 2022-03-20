import React, { useState, useEffect } from "react";
import "./rightbar.css";
import { v4 as uuidv4 } from "uuid";
import { users } from "../../fakeData";
import { Online } from "..";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Rightbar = ({ user }) => {
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null);
  const { data: userLoggedIn } = useSelector((state) => state.loginReducer);
  const [followed, setFollowed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setFollowed(userLoggedIn?.following?.includes(user?._id));
  }, [userLoggedIn, user?._id]);

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
    const [message, setMessage] = useState("");
    const relationship =
      user.relationship === 1
        ? "Single"
        : user.relationship === 2
        ? "Married"
        : "Dating";

    const handleFollow = () => {
      axios
        .put(`/users/${user._id}/${followed ? "unfollow" : "follow"}`, {
          userId: userLoggedIn._id
        })
        .then((res) => res.data)
        .then((data) => {
          setMessage(data);
          if (followed) dispatch({ type: 'UNFOLLOW_USER', payload: user._id })
          else dispatch({ type: 'FOLLOW_USER', payload: user._id})
        })
        .catch((err) => setError("Ooops! please try again later."));
      setFollowed(!followed);
    };

    return (
      <>
        {message && <p>{message}</p>}
        {userLoggedIn.username !== user.username && (
          <button className="followBtn" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow +"}
          </button>
        )}
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
            <Link to={`/profile/${friend.username}`} className="link">
              <li key={uuidv4()} className="rightbarFollowing">
                <img
                  src={`${assets + friend.profilePic}`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <p className="rightbarFollowingName">{friend.username}</p>
              </li>
            </Link>
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
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </section>
  );
};

export default Rightbar;
