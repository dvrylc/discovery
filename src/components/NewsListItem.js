// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class NewsListItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <article className="news-list-item">
        <a className="news-list-item-meta" href={ item.url }>
          <div>
            <span>{ item.user } · { item.time_ago }</span>

            <h1>{ item.title }</h1>
          </div>
        </a>

        <Link to={{ pathname: `/item/${item.id}` }}>
          <div>
            <span>{ item.points } points · { item.comments_count } comments</span>
          </div>
        </Link>
      </article>
    );
  }
}

export default NewsListItem;
