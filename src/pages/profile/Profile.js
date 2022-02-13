import React from 'react'
import { Sidebar, Topbar } from '../../components'
import { Feed } from '../../components'
import { Rightbar } from '../../components'
import './profile.css';

const Profile = () => {
  return (
    <>
      <Topbar />
      <section className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/posts/3.jpeg" alt="cover-img" />
              <img className="profileUserImg" src="assets/people/7.jpg" alt="cover-img" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ocean Hart</h4>
              <p className="profileInfoDesc">I am a software engineer. Reactjs / Nodejs /Rails</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile