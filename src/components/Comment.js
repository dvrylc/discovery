// External import
import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: this.props.collapsed
    };
  }

  toggleCollapse = () => {
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

    let commentBody;
    if (!this.state.collapsed) {
      commentBody = <p dangerouslySetInnerHTML={{ __html: comment.content }} />;
    }

    return (
      <div className={ `comment comment-l${ comment.level }` }>
        <div className="comment-meta" onClick={ this.toggleCollapse }>
          <p><strong>{ comment.user }</strong></p>

          <a href={ `https://news.ycombinator.com/item?id=${comment.id}` }>
            { comment.time_ago }
          </a>
        </div>

        { commentBody }
      </div>
    );
  }
}

export default Comment;
