// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import api from '../utilities/api';
import Header from './Header';
import About from './About';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      news: []
    }
  }

  componentDidMount() {
    api.fetchNews()
      .then(r => r.json())
      .then(r => {
        this.setState({
          news: r
        });

        console.log('Initial news fetch complete.');
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="app">
        <Header />

        <Route exact path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
