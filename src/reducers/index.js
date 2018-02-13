import {combineReducers} from 'redux';

import {comicsReducers} from './comicsReducers'

export default combineReducers({
  comics: comicsReducers,
})