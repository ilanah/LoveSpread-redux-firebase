import { connect } from 'react-redux';

// import {getContacts} from "./Contacts.actions";

import App from './App.view';

function mapStateToProps(state) {
  return {
    // contacts: state.contacts
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