import React, { Component } from 'react';
import './App.css';

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query: '{ greeting }'})
  });
  const responseBody = await response.json();
  return responseBody.data.greeting;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ''
    };
  }

  componentDidMount() {
    loadGreeting().then((greeting) => this.setState({greeting}));
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
      </div>
    );
  }
}

export default App;
