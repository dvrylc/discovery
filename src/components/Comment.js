// External import
import React from 'react';

// Internal imports
import commentProcessor from '../utilities/commentProcessor';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: false
    }

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(e) {
    e.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const comment = this.props.comment;

    // Render deleted comments
    if (comment.deleted) {
      return (
        <div className={ `comment comment-l${ comment.level }` }>
          <p>{ comment.content }</p>
        </div>
      );
    }

    // Handle collapsing
    let commentContent;
    if (!this.state.collapsed) {
      // Nested comments
      let commentNested;
      if (comment.comments.length !== 0) {
        commentNested = (
          <div className="comment-nested">
            { commentProcessor(comment.comments) }
          </div>
        );
      }

      commentContent = (
        <div className="comment-body">
          <div className="comment-content" dangerouslySetInnerHTML={{ __html: comment.content }} />

          { commentNested }
        </div>
      );
    }

    return (
      <div className={ `comment comment-l${ comment.level }` }>
        <div className="comment-meta">
          <p><strong>{ comment.user }</strong></p>

          <a href="" onClick={ this.toggleCollapse }>
            { this.state.collapsed ? ` [+]` : ' [-]' }
          </a>

          <a href={ `https://news.ycombinator.com/item?id=${comment.id}` }>
            { comment.time_ago }
          </a>
        </div>

        { commentContent }
      </div>
    );
  }
}

export default Comment;
