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

    // Parse item link if available
    let itemLink;
    if (item.url.startsWith('item')) {
      itemLink = (
        <h1>{ item.title }</h1>
      );
    } else {
      itemLink = (
        <a href={ item.url }>
          <h1>{ item.title }</h1>
        </a>
      );
    }

    // Parse item content if available
    let itemContent;
    if (item.content) {
      itemContent = (
        <div className="news-item-content" dangerouslySetInnerHTML={{ __html: item.content }} />
      );
    }

    // Process comments
    const itemComments = commentProcessor(item.comments);

    const main = (
      <main>
        <article className="news-item">
          <div className="news-item-meta">
            <small>{ item.user } · { item.time_ago }</small>

            { itemLink }

            <small>{ item.points } points · { item.comments_count } comments</small>
          </div>

          { itemContent }
        </article>

        <section>
          { itemComments }
        </section>
      </main>
    );

    return main;
  }
}

export default NewsItem;
