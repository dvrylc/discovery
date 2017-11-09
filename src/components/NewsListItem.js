// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class NewsListItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <article>
        <span>{ item.user } · { item.time_ago }</span>

        <h1>
          <a href={ item.url }>{ item.title }</a>
        </h1>

        <span>
          { item.points } points
          <Link to={{ pathname: `/item/${ item.id }` }}>
            { ` · ${item.comments_count}` } comments
          </Link>
        </span>
      </article>
    );
  }
}

export default NewsListItem;
