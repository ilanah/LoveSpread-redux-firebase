import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import firebase from 'firebase';

const firebase_config = {
  apiKey: "AIzaSyBQDs25w1rBKyamg6DcWBy7yQv6f4G-uc0",
  authDomain: "love-spread.firebaseapp.com",
  databaseURL: "https://love-spread.firebaseio.com",
  projectId: "love-spread",
  storageBucket: "love-spread.appspot.com",
  messagingSenderId: "522191357045"
};

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