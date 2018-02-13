import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getComics} from '../src/actions/comicActions'
import ComicsList from './components/comicsList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ComicsList />
      </div>
    );
  }
}

export default App;
