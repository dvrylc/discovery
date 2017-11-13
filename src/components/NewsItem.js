// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';
import commentProcessor from '../utilities/commentProcessor';
import Loading from './Loading';

class NewsItem extends React.Component {
  constructor() {
    super();

    this.state = {
      item: {},
      loading: true
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    api.fetchItem(id)
      .then(r => r.json())
      .then(r => {
        this.setState({
          item: r,
          loading: false
        });

        document.title = `${ r.title } · Discovery`
      })
      .catch(e => console.error(e));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const item = this.state.item;

    let comments = [];
    if (Object.keys(item).length !== 0) {
      comments = commentProcessor(item.comments);
    }

    return (
      <main className="news-item">
        <article>
          <a href={ item.url }>
            <div>
              <span>{ item.user } · { item.time_ago }</span>

              <h1>{ item.title }</h1>

              <span>{ item.points } points · { item.comments_count } comments</span>
            </div>
          </a>
        </article>

        <section className="comments">
          { comments }
        </section>
      </main>
    );
  }
}

export default NewsItem;
