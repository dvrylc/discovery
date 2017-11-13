// External imports
import React from 'react';

// Internal imports
import Comment from '../components/Comment';

const commentProcessor = comments => {
  let output = [];

  const proc = (comments, collapsed = false) => {
    comments.forEach(comment => {
      output.push(<Comment key={ comment.id } comment={ comment } collapsed={ collapsed } />);

      if (comment.comments.length !== 0) {
        proc(comment.comments, true);
      }
    });
  }

  proc(comments);

  return output;
}

export default commentProcessor;
