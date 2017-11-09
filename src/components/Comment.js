// External import
import React from 'react';

class Comment extends React.Component {
  render() {
    const comment = this.props.comment;

    return (
      <div className={ `l${comment.level}` }>
        <p><strong>{ comment.user }</strong></p>

        <a href={ `https://news.ycombinator.com/item?id=${comment.id}` }>
          { comment.time_ago }
        </a>

        <p dangerouslySetInnerHTML={{ __html: comment.content }} />
      </div>
    );
  }
}

export default Comment;
