import { connect } from 'react-redux';

// import {getContacts} from "./Contacts.actions";

import App from './App.view';

function mapStateToProps(state) {
    const isLoggedIn = state.authReducer.currentUser && state.authReducer.currentUser.uid ? true:false;
  return {
    // contacts: state.contacts
    isLoggedIn,
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
//    onGetContacts: () => dispatch(getContacts())
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;