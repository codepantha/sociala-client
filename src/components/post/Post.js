import { MoreVert } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import './post.css';
import axios from 'axios';

const Post = ({ post }) => {
  const { desc, img, createdAt, comment } = post;
  const [likes, setLikes] = useState(post.likes?.length);
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({});
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      const user = res.data;
      setUser(user);
    }
    getUser();
  }, [post.userId]);


  const onLikeHandler = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1: likes + 1);
  }

  return (
    <article className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user.img || `${assets}avatar.png`} alt="profile-pic" />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <p className="postText">{desc}</p>
          <img src={assets + img} alt="post" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${assets}like.png`} alt="like" onClick={onLikeHandler} />
            <img className="likeIcon" src={`${assets}heart.png`} alt="like" />
            <span className="likesCounter">{likes} people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="commentsCounter">{comment} comments</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post