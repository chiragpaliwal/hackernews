import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    const {list, searchTerm} = this.state;
    return (
      <div className="page">
        <h1 className="interactions">Hacker News</h1>
      </div>
    );
  }
}

export default App;