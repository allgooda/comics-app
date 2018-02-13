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
    console.log('More comics!');
    this.props.generateComics();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  // onClick={this.removeComic.bind(this, comicsArr.data.num)}

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

          <Button type="primary" onClick={this.showModal}>
            I Read this one!
          </Button>
        </div>
      )

    }, this)
    return (
      <div className='comic-list-container'>
        {booksList}

        <Modal
          title="Finished this comic?"
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
