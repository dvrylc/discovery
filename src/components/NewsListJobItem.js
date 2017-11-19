// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class NewsListJobItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <article>
        <Link to={{ pathname: `/item/${item.id}` }}>
          <div>
            <span>{ item.time_ago }</span>

            <h1>{ item.title }</h1>
          </div>
        </Link>
      </article>
    );
  }
}

export default NewsListJobItem;
