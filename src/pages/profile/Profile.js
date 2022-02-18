import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Sidebar, Topbar } from '../../components'
import { Feed } from '../../components'
import { Rightbar } from '../../components'
import './profile.css';

const Profile = () => {
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    }
    getUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <section className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={user.coverPic ? assets + user?.coverPic : assets + 'avatar.png'} alt="cover-img" />
              <img className="profileUserImg" src={user.profilePic ? assets + user?.profilePic : assets + 'avatar.png'} alt="cover-img" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <p className="profileInfoDesc">{user?.bio}</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile