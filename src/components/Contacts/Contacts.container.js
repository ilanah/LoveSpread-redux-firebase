import { connect } from 'react-redux';

import {getContacts} from "./Contacts.actions";

import Contacts from './Contacts.view';

function mapStateToProps(state) {
  return {
    contacts: state.contactsReducer.contacts,
    msg: state.contactsReducer.msg
  };
}

function mapDispatchToProps(dispatch) {
  return {
   onGetContacts: () => dispatch(getContacts())
  };
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;