import React from 'react';
import './feed.css';
import { v4 as uuidv4 } from 'uuid';
import { Post, Share } from '..';
import { posts as dummyPosts, users } from '../../fakeData';

const Feed = () => {
  return (
    <section className="feed">
      <div className="feedWrapper">
        <Share />
        {dummyPosts.map((dummyPost, i) => (
          <Post 
            key={uuidv4()}
            username={users[i].username}
            desc={dummyPost.desc}
            photo={dummyPost.photo}
            date={dummyPost.date}
            like={dummyPost.like}
            comment={dummyPost.comment}
          />
        ))}
      </div>
    </section>
  )
}

export default Feed