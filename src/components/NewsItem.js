// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';
import commentProcessor from '../utilities/commentProcessor';

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

        //console.log(r);
        console.log(`Item fetched: ${id}`);
      })
      .catch(e => console.error(e));
  }

  render() {
    const item = this.state.item;

    let comments = [];
    if (Object.keys(item).length !== 0) {
      comments = commentProcessor(item.comments);
    }

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

        <section className="comments">
          { comments }
        </section>
      </main>
    );
  }
}

export default NewsItem;
