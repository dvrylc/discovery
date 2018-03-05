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

  return comments.map(comment => <Comment key={ comment.id } comment={ comment } />);
}

export default commentProcessor;
