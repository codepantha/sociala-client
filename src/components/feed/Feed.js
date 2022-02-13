import React from 'react';
import './feed.css';
import { v4 as uuidv4 } from 'uuid';
import { Post, Share } from '..';
import { posts as dummyPosts } from '../../fakeData';

const Feed = () => {
  return (
    <section className="feed">
      <div className="feedWrapper">
        <Share />
        {dummyPosts.map((dummyPost, i) => (
          <Post 
            key={uuidv4()}
            post={dummyPost}
          />
        ))}
      </div>
    </section>
  )
}

export default Feed