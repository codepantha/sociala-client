import React, { useState, useEffect } from "react";
import "./feed.css";
import { v4 as uuidv4 } from "uuid";
import { Post, Share } from "..";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // if a username is passed, only fetch the user's posts
      // else fetch the loggedInUser's posts
      const res = username
        ? await axios.get(`/posts/${username}/all`)
        : await axios.get("posts/timeline/6203a75b7cd6b8492f3aa6e1");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <section className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post, i) => <Post key={uuidv4()} post={post} />)}
      </div>
    </section>
  );
};

export default Feed;
