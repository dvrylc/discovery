// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class NewsListAskItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <article>
        <Link to={{ pathname: `/item/${item.id}` }}>
          <div>
            <span>{ item.user } · { item.time_ago }</span>

            <h1>{ item.title }</h1>

            <span>{ item.points } points · { item.comments_count } comments</span>
          </div>
        </Link>
      </article>
    );
  }
}

export default NewsListAskItem;
