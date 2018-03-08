// External imports
import React from 'react';
import { Link } from 'react-router-dom';

// Internal imports
import timeProcessor from '../utilities/timeProcessor';

class NewsListItem extends React.Component {
  render() {
    const item = this.props.item;

    // Return templates for different items (link / job / ask)
    if (item.type === 'job') {
      return (
        <article className="news-list-item">
          <small className="news-list-item-meta">{ timeProcessor(item.time) }</small>

          <a href={ item.url }>
            <h1>{ item.title }</h1>
          </a>
        </article>
      );
    } else if (item.url.startsWith('item')) {
      return (
        <article className="news-list-item">
          <small className="news-list-item-meta">{ item.user } · { timeProcessor(item.time) }</small>

          <Link to={{ pathname: `/item/${item.id}` }}>
            <h1>{ item.title }</h1>

            <small>{ item.points } points · { item.comments_count } comments</small>
          </Link>
        </article>
      );
    } else {
      return (
        <article className="news-list-item">
            <small className="news-list-item-meta">{ item.user } · { timeProcessor(item.time) }</small>

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
