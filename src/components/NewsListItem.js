// External imports
import React from 'react';

class NewsListItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <article>
        <span>{ item.user } · { item.time_ago }</span>

        <h1>
          <a href={ item.url }>{ item.title }</a>
        </h1>

        <span>{ item.points } points · { item.comments_count } comments</span>
      </article>
    );
  }
}

export default NewsListItem;
