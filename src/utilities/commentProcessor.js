// External imports
import React from 'react';

// Internal imports
import Comment from '../components/Comment';

const commentProcessor = comments => {
  let output = [];

  const proc = comments => {
    comments.forEach(comment => {
      output.push(<Comment key={ comment.id } comment={ comment } />);

      if (comment.comments.length !== 0) {
        proc(comment.comments);
      }
    });
  }

  proc(comments);

  return output;
}

export default commentProcessor;
