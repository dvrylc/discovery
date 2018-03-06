// External imports
import React from 'react';

// Internal imports
import NewsListItem from './NewsListItem';
import Loading from './Loading';

class NewsList extends React.Component {
  componentDidMount() {
    document.title = "Discovery";

    // Fetch first page of news items on initial mount
    if (this.props.data.length === 0) {
      this.props.fetchNews();
    }
  }

  render() {
    if (this.props.data.length === 0) {
      return <Loading />;
    }

    const news = this.props.data;
    const newsListItems = news.map(item => <NewsListItem key={ item.id } item={ item } />);

    return (
      <main>
        { newsListItems }

        <a className="news-list-load-more" onClick={ this.props.fetchNews }>Load more items...</a>
      </main>
    );
  }
}

export default NewsList;
