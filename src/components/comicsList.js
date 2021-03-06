import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getComics, removeComic, generateComics} from '../actions/comicActions';
import {bindActionCreators} from 'redux';
import { Modal, Button } from 'antd';

class ComicsList extends Component {
  componentDidMount() {
    this.props.getComics();
  }

  state = { visible: false }

  removeComic(num) {
    this.props.removeComic(num);
  }

  generateComics() {
    let currentComics = [];
    for(var i=0; i < this.props.comics.length; i++) {
      currentComics.push(this.props.comics[i].data.num)
    }
    this.props.generateComics(currentComics);
  }

  showModal = (num) => {
    this.setState({
      visible: true,
      comic: num,
    });
  }

  handleOk = (e) => {
    this.removeComic(this.state.comic);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      comic: null,
    });
  }

  render() {

    const booksList = this.props.comics.map(function(comicsArr) {
      return(
        <div key={comicsArr.data.num} className="demo-card-square mdl-card mdl-shadow--2dp card-space">

          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">#{comicsArr.data.num} - {comicsArr.data.safe_title}</h2>
          </div>

          <img src={comicsArr.data.img} width="100%" height="auto" />

          <div className="mdl-card__supporting-text">
            Published: {comicsArr.data.year}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a target="_blank" href={'https://xkcd.com/' + comicsArr.data.num}  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              VIEW
            </a>
          </div>

          <Button type="primary" onClick={this.showModal.bind(this, comicsArr.data.num)}>
            I Read this one!
          </Button>
        </div>
      )

    }, this)
    return (
      <div className='comic-list-container'>
        {booksList}

        <Modal
          title="Finished reading this comic?"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <p>Would you like to delete it?</p>
        </Modal>

        <button onClick={this.generateComics.bind(this)} className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored bottom-padding">
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
    generateComics: generateComics,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsList);
