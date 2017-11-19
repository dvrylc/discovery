// External imports
import React from 'react';

// Internal imports
import Comment from '../components/Comment';

const commentProcessor = comments => {
  if (comments.length === 0) {
    return (
      <p className="news-item-no-comments">No comments found.</p>
    );
  }

  let output = [];

  const proc = (comments) => {
    comments.forEach(comment => {
      const collapsed = comment.level < 3 ? false : true;
      output.push(<Comment key={ comment.id } comment={ comment } collapsed={ collapsed } />);

      if (comment.comments.length !== 0) {
        proc(comment.comments);
      }
    });
  }

  proc(comments);

  return output;
}

export default commentProcessor;
