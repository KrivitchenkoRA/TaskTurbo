import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import config from './config';
import listAds from './listAds';

const logger = createLogger();

const store = createStore(
  combineReducers({
    config,
    listAds,
  }),
  applyMiddleware(logger),
);

export default store;
