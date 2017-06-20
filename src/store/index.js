import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import firebase from 'firebase';
import firebase_config from './firebase_config';

firebase.initializeApp(firebase_config);

export const database = firebase.database();
export const auth = firebase.auth();

const logger = createLogger();
const middleware = composeWithDevTools(applyMiddleware(thunk, logger))

const store = createStore(rootReducer,
  {},
  middleware
);

export default store;