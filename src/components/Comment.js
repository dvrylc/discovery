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

    if (this.state.collapsed) {
      return (
        <div className={ `comment l${comment.level}` }>
          <div className="comment-meta" onClick={ this.toggleCollapse }>
            <p><strong>{ comment.user }</strong></p>

            <a href={ `https://news.ycombinator.com/item?id=${comment.id}` }>
              {comment.time_ago}
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className={ `comment l${comment.level}` }>
          <div className="comment-meta" onClick={ this.toggleCollapse }>
            <p><strong>{ comment.user }</strong></p>

            <a href={ `https://news.ycombinator.com/item?id=${comment.id}` }>
              {comment.time_ago}
            </a>
          </div>

          <p dangerouslySetInnerHTML={{ __html: comment.content }} />
        </div>
      );
    }
  }
}

export default Comment;
