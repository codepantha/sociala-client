import React, { useState, useEffect } from "react";
import "./feed.css";
import { v4 as uuidv4 } from "uuid";
import { Post, Share } from "..";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedInUserPosts, getProfilePosts } from "../../redux/posts/posts";

const Feed = ({ username }) => {
  // const [posts, setPosts] = useState([]);
  const { data: userLoggedIn } = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // if a username is passed, only fetch the user's posts
    // else fetch the loggedInUser's posts
    username
    ? dispatch(getProfilePosts(username))
    : dispatch(getLoggedInUserPosts(userLoggedIn))
  }, [username, userLoggedIn, dispatch]);
  
  const { loading, posts, error } = useSelector(state => state.postsReducer)
  return (
    <section className="feed">
      <div className="feedWrapper">
        <Share username={username} />
        {loading ? 
          'Loading...'
          :
          posts.map((post, i) => <Post key={uuidv4()} post={post} />)
        }
      </div>
    </section>
  );
};

export default Feed;
