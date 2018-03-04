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
      newsListData: [],
      newsItemData: {}
    }

    this.fetchNews = this.fetchNews.bind(this);
    this.fetchItem = this.fetchItem.bind(this);
    this.clearItem = this.clearItem.bind(this);
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

  fetchItem(id) {
    api.fetchItem(id)
      .then(r => r.json())
      .then(r => {
        this.setState({
          newsItemData: r
        });
      })
      .catch(e => console.error(e));
  }

  clearItem() {
    this.setState({
      newsItemData: {}
    });
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

        <Route exact path="/item/:id" render={ routerProps =>
          <NewsItem
            data={ this.state.newsItemData }
            fetchItem={ this.fetchItem }
            clearItem={ this.clearItem }
            {...routerProps}
          />
        } />

        <Route exact path="/about" component={ About } />
      </div>
    );
  }
}

export default DataLayer;
