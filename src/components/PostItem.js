import React from 'react';

import './PostItem.css';

function PostComments({ comments }) {
  return (
    <ul className="post-comments">
      {comments.map(comment => (
        <li className="post-comment">
          <img src={comment.author.avatar} alt={comment.author.name} />
          <div className="post-comment__content">
            <h1>{comment.author.name}</h1>
            <p>{comment.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <li className="post-item">
      <header>
        <img src={author.avatar} alt={author.name} />
        <div className="post-item__details">
          <h1>{author.name}</h1>
          <span>{date}</span>
        </div>
      </header>

      <p>{content}</p>
      <div className="divider"></div>

      <PostComments comments={comments} />
    </li>
  );
}

export default PostItem;
