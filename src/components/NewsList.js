// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';
import NewsListItem from './NewsListItem';
import NewsListAskItem from './NewsListAskItem';
import NewsListJobItem from './NewsListJobItem';
import Loading from './Loading';

class NewsList extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 0,
      news: [],
      loading: true
    };
  }

  componentDidMount() {
    document.title = "Discovery";
    this.loadMoreItems();
  }

  loadMoreItems = () => {
    api.fetchNews(this.state.currentPage + 1)
      .then(r => r.json())
      .then(r => {
        this.setState({
          currentPage: this.state.currentPage + 1,
          news: this.state.news.concat(r),
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
      <main className="news-list">
        { newsListItems }

        <a onClick={ this.loadMoreItems }>Load more items...</a>
      </main>
    );
  }
}

export default NewsList;
