import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getComics} from '../src/actions/comicActions'


class App extends Component {
  componentDidMount() {
    this.props.getComics();
  }

  render() {
    return (
      // <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      // </Provider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getComics: getComics,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
