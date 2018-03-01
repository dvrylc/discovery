// External imports
import React from 'react';

// Internal imports
import Header from './Header';
import DataLayer from './DataLayer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <DataLayer />
      </div>
    );
  }
}

export default App;
