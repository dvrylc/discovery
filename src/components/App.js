// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import Header from './Header';
import About from './About';
import NewsList from './NewsList';
import NewsItem from './NewsItem';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Route exact path="/" component={ NewsList } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/item/:id" component={ NewsItem } />
      </div>
    );
  }
}

export default App;
