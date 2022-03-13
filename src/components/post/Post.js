import { MoreVert } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import './post.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Post = ({ post }) => {
  const { desc, img, createdAt, comment } = post;
  const [likes, setLikes] = useState(post.likes?.length);
  const [isLiked, setIsLiked] = useState(false)
  const [author, setAuthor] = useState({});
  const assets = process.env.REACT_APP_PUBLIC_FOLDER;

  const { data: userLoggedIn } = useSelector(state => state.loginReducer);

  useEffect(() => {
    const getAuthor = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      const author = res.data;
      setAuthor(author);
    }
    getAuthor();
  }, [post.userId]);

  useEffect(() => {
    setIsLiked(post.likes.includes(userLoggedIn._id))
  }, [post.likes, userLoggedIn._id])


  const onLikeHandler = () => {
    setIsLiked(!isLiked);
    axios.put(`/posts/${post._id}/like`, {
      userId: userLoggedIn._id
    });
    setLikes(isLiked ? likes - 1: likes + 1);
  }

  return (
    <article className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${author.username}`}>
              <img className="postProfileImg" src={assets + author.profilePic || `${assets}avatar.png`} alt="profile-pic" />
            </Link>
            <span className="postUsername">{author.username}</span>
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