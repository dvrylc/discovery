// External imports
import React from 'react';

class About extends React.Component {
  componentDidMount() {
    document.title = 'About · Discovery';
  }

  render() {
    return (
      <main>
        <strong>Discovery</strong> is a cutting-edge Hacker News client.
      </main>
    );
  }
}

export default About;
