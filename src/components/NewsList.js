// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';
import NewsListItem from './NewsListItem';
import Loading from './Loading';

class NewsList extends React.Component {
  constructor() {
    super();

    this.state = {
      news: [],
      loading: true
    };
  }

  componentDidMount() {
    document.title = "Discovery";

    api.fetchNews()
      .then(r => r.json())
      .then(r => {
        this.setState({
          news: r,
          loading: false
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const news = this.state.news;
    const newsListItems = news.map(item => {
      return <NewsListItem key={ item.id } item={ item } />;
    });

    return (
      <main className="news-list">
        { newsListItems }
      </main>
    );
  }
}

export default NewsList;
