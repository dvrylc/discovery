// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';

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
        Discovery
      </div>
    );
  }
}

export default App;
