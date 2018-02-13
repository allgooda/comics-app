import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getComics} from '../actions/comicActions';
import {bindActionCreators} from 'redux';
import {removeComic} from '../actions/comicActions';
import {findDOMNode} from 'react-dom';

class ComicsList extends Component {
  componentDidMount() {
    this.props.getComics();
  }

  removeComic(num) {
    this.props.removeComic(num);
  }

  render() {

    const booksList = this.props.comics.map(function(comicsArr) {
      return(
        <div key={comicsArr.data.num} className="demo-card-square mdl-card mdl-shadow--2dp card-space">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">#{comicsArr.data.num} - {comicsArr.data.title}</h2>
          </div>

          <div className="mdl-card__supporting-text">
            {comicsArr.data.alt}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a target="_blank" href="https://xkcd.com/#{comicsArr.data.num}/info.0.json"  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              VIEW
            </a>
          </div>

          <button onClick={this.removeComic.bind(this, comicsArr.data.num)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            I Read this one!
          </button>
        </div>
      )

    }, this)
    return (
      <div className='comic-list-container'>
        {booksList}

        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
          <i className="material-icons">add</i>
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comics: state.comics.comics
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getComics: getComics,
    removeComic: removeComic,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsList);
