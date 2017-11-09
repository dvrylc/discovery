// External import
import React from 'react';

class Comment extends React.Component {
  render() {
    const comment = this.props.comment;

    return (
      <div className={ `l${comment.level}` }>
        <p><strong>{ comment.user }</strong></p>

        <time>{ comment.time_ago }</time>

        <p dangerouslySetInnerHTML={{ __html: comment.content }} />
      </div>
    );
  }
}

export default Comment;
