import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import './share.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getLoggedInUserPosts, getProfilePosts } from '../../redux/posts/posts';

const Share = ({ username }) => {
  const dispatch = useDispatch();
  const { data: userLoggedIn } = useSelector(state => state.loginReducer)
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      userId: userLoggedIn._id,
      desc: desc.current.value
    }

    if (file) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      let filename = file.name + uniqueSuffix
      const data = new FormData();
      data.set('name', filename);
      data.set('file', file);
      newPost.img = filename;

      try {
        axios.post('/upload', data)
        // if username is passed, then we are on the profile page
        // and need to fetch profile posts. Else fetch loggedInUser's posts
        username ? dispatch(getProfilePosts(username))
          : dispatch(getLoggedInUserPosts(userLoggedIn));
      } catch (err) {
        console.log(err);
      }
    }

    try {
      axios.post('/posts', newPost)
      username ? dispatch(getProfilePosts(username))
        : dispatch(getLoggedInUserPosts(userLoggedIn));
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <section className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={userLoggedIn.profilePic ? assets + userLoggedIn.profilePic : assets + 'avatar.png'} alt="person1" />
          <input
            placeholder={`What's on your mind, ${userLoggedIn.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className="shareIcon" />
              <label htmlFor="file" className="shareOptionText">{file ? file.name : 'Photo or Video'}</label>
              <input style={{ display: 'none' }} type="file" id="file" accept=".jpeg, .jpg, .png" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button type="submit" className="shareButton">
            Share
          </button>
        </form>
      </div>
    </section>
  );
};

export default Share;
