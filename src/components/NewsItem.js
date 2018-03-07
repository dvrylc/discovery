// External imports
import React from 'react';

// Internal imports
import commentProcessor from '../utilities/commentProcessor';
import Loading from './Loading';

class NewsItem extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    // Check id of item in props (if available)
    // If it's not the item we want, fetch the new item
    if (''+this.props.data.id !== id) {
      this.props.clearItem();
      this.props.fetchItem(id);
    }
  }

  render() {
    if (Object.keys(this.props.data).length === 0) {
      return <Loading />;
    }

    const item = this.props.data;

    // Render differently depending on whether item is a job or news
    let main;
    if (item.type === 'job') {
      main = (
        <main>
          <article className="news-item">
            <small>{ item.time_ago }</small>

            <a href={ item.url }>
              <h1>{ item.title }</h1>
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
            <small>{ item.user } · { item.time_ago }</small>

            <a href={ item.url }>
              <h1>{ item.title }</h1>
            </a>

            <small>{ item.points } points · { item.comments_count } comments</small>
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
