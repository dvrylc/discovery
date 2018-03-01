// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import api from '../utilities/api';
import About from './About';
import NewsList from './NewsList';
import NewsItem from './NewsItem';

class DataLayer extends React.Component {
  constructor() {
    super();

    this.state = {
      newsListCurrentPage: 0,
      newsListData: []
    }

    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    api.fetchNews(this.state.newsListCurrentPage + 1)
      .then(r => r.json())
      .then(r => {
        this.setState({
          newsListCurrentPage: this.state.newsListCurrentPage + 1,
          newsListData: this.state.newsListData.concat(r)
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="content">
        <Route exact path="/" render={ () =>
          <NewsList
            data={ this.state.newsListData }
            fetchNews={ this.fetchNews }
          />
        } />

        <Route exact path="/about" component={ About } />

        <Route exact path="/item/:id" component={ NewsItem } />
      </div>
    );
  }
}

export default DataLayer;
