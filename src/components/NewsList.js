// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';
import NewsListItem from './NewsListItem';

class NewsList extends React.Component {
  constructor() {
    super();

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    document.title = "Discovery";

    api.fetchNews()
      .then(r => r.json())
      .then(r => {
        this.setState({
          news: r
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const news = this.state.news;
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
