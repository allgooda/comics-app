import React, { Component } from 'react';
import './App.css';
import ComicsList from './components/comicsList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> XKCD Comics Generator! </h1>
        <ComicsList />
      </div>
    );
  }
}

export default App;
