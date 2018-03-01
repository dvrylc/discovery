// External imports
import React from 'react';

// Internal imports
import NewsListItem from './NewsListItem';
import NewsListAskItem from './NewsListAskItem';
import NewsListJobItem from './NewsListJobItem';
import Loading from './Loading';

class NewsList extends React.Component {
  componentDidMount() {
    document.title = "Discovery";
  }

  render() {
    if (this.props.data.length === 0) {
      return <Loading />;
    }

    const news = this.props.data;
    const newsListItems = news.map(item => {
      switch(item.type) {
        case 'ask':
          return <NewsListAskItem key={ item.id } item={ item } />;
        case 'job':
          return <NewsListJobItem key={ item.id } item={ item } />;
        default:
          return <NewsListItem key={ item.id } item={ item } />;
      }
    });

    return (
      <main>
        { newsListItems }

        <a className="news-list-load-more" onClick={ this.props.fetchNews }>Load more items...</a>
      </main>
    );
  }
}

export default NewsList;
