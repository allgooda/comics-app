import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getComics} from '../actions/comicActions';
import {bindActionCreators} from 'redux'

class ComicsList extends Component {

  render() {
    return (
      <div> BOOKS LIST </div>
    )
  }
}


export default ComicsList
