// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class NewsListItem extends React.Component {
  render() {
    const item = this.props.item;

    // Return templates for respective items (normal item / job / ask)
    switch(item.type) {
      case 'ask':
        return (
          <article className="news-list-item">
            <small className="news-list-item-meta">{ item.user } · { item.time_ago }</small>

            <Link to={{ pathname: `/item/${item.id}` }}>
              <h1>{ item.title }</h1>

              <small>{ item.points } points · { item.comments_count } comments</small>
            </Link>
          </article>
        );
      case 'job':
        return (
          <article className="news-list-item">
            <small className="news-list-item-meta">{ item.time_ago }</small>

            <Link to={{ pathname: `/item/${item.id}` }}>
              <h1>{ item.title }</h1>
            </Link>
          </article>
        );
      default:
        return (
          <article className="news-list-item">
              <small className="news-list-item-meta">{ item.user } · { item.time_ago }</small>

              <a href={ item.url }>
                <h1>{ item.title }</h1>
              </a>

            <Link to={{ pathname: `/item/${item.id}` }}>
              <small>{ item.points } points · { item.comments_count } comments</small>
            </Link>
          </article>
        );
    }
  }
}

export default NewsListItem;
