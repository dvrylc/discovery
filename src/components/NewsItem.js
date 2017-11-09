// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';

class NewsItem extends React.Component {
  constructor() {
    super();

    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    api.fetchItem(id)
      .then(r => r.json())
      .then(r => {
        this.setState({
          item: r
        });

        console.log(r);
        console.log(`Item fetched: ${id}`);
      })
      .catch(e => console.error(e));
  }

  render() {
    const item = this.state.item;

    return (
      <main className="news-item">
        <article>
          <span>{ item.user } · { item.time_ago }</span>

          <h1>
            <a href={ item.url }>{ item.title }</a>
          </h1>

          <span>
            { item.points } points · { item.comments_count }  comments
          </span>
        </article>

        <div>comments</div>
      </main>
    );
  }
}

export default NewsItem;
