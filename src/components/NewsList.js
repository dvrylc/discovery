// External imports
import React from 'react';

// Internal imports
import NewsListItem from './NewsListItem';

class NewsList extends React.Component {
  componentDidMount() {
    document.title = "Discovery";
  }

  render() {
    const news = this.props.news;
    const newsListItems = news.map((item, index) => {
      return <NewsListItem key={ index } item={ item } />;
    });

    return (
      <main className="news-list">
        { newsListItems }
      </main>
    );
  }
}

export default NewsList;
