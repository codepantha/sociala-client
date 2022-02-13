import { MoreVert } from '@material-ui/icons';
import React, { useState } from 'react';
import './post.css';
import { users } from '../../fakeData';

const Post = ({ post }) => {
  const { desc, photo, date, like, comment } = post;
  const user = users.filter(user => user.id === post.userId)

  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false)

  const onLikeHandler = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1: likes + 1);
  }

  return (
    <article className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user[0]?.profilePicture} alt="profile-pic" />
            <span className="postUsername">{user[0]?.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <p className="postText">{desc}</p>
          <img src={photo} alt="post" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like" onClick={onLikeHandler} />
            <img className="likeIcon" src="assets/heart.png" alt="like" />
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