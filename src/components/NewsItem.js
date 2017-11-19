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

    // Fetch item
    api.fetchItem(id)
      .then(r => r.json())
      .then(r => {
        this.setState({
          item: r,
          loading: false
        });

        // Set item's title as the document title
        document.title = `${ r.title } · Discovery`
      })
      .catch(e => console.error(e));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const item = this.state.item;

    // Render differently depending on whether item is a job or news
    let main;
    if (item.type === 'job') {
      main = (
        <main>
          <article className="news-item">
            <a href={ `https://news.ycombinator.com/item?id=${item.id}` }>
              <div>
                <span>{ item.time_ago }</span>

                <h1>{ item.title }</h1>
              </div>
            </a>
          </article>

          <div className="comment" dangerouslySetInnerHTML={{ __html: item.content }} />
        </main>
      );
    } else {
      // Process comments
      const comments = commentProcessor(item.comments);

      main = (
        <main>
          <article className="news-item">
            <a href={ item.url }>
              <div>
                <span>{ item.user } · { item.time_ago }</span>

                <h1>{ item.title }</h1>

                <span>{ item.points } points · { item.comments_count } comments</span>
              </div>
            </a>
          </article>

          <section>
            { comments }
          </section>
        </main>
      );
    }

    return main;
  }
}

export default NewsItem;
