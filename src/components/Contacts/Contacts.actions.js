import database from '../../database';

export const GET_CONTACTS_REQUESTED = 'GET_CONTACTS_REQUESTED';
export const GET_CONTACTS_REJECTED = 'GET_CONTACTS_REJECTED';
export const GET_CONTACTS_FULFILLED = 'GET_CONTACTS_FULFILLED';

export function getContacts() {
  return dispatch => {
    dispatch(getContactsRequestedAction());
    return database.ref('contacts').once('value', snap => {
      const contacts = snap.val();
      dispatch(getContactsFulfilledAction(contacts))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getContactsRejectedAction());
    });
  }
}

function getContactsRequestedAction() {
  return {
    type: GET_CONTACTS_REQUESTED
  };
}

function getContactsRejectedAction() {
  return {
    type: GET_CONTACTS_REJECTED
  }
}

function getContactsFulfilledAction(contacts) {
  return {
    type: GET_CONTACTS_FULFILLED,
    contacts
  };
}