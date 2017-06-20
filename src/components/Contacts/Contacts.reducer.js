import * as actions from './Contacts.actions'

export default function contactsReducer(contactsReducer={contacts : [],msg:"Charging the energy..."}, action) {
  switch (action.type) {
    case actions.GET_CONTACTS_FULFILLED:
        return {
            contacts: action.contacts,
            msg:"Loaded "+ Object.keys(action.contacts).length + " contacts" 
        }
    case actions.GET_CONTACTS_REQUESTED:
        return {
            contacts: contactsReducer.contacts,
            msg: "Loading contacts..."
        }
    case actions.GET_CONTACTS_REJECTED:
        return {
            contacts: contactsReducer.contacts,
            msg: "Failed to load contacts"
        }
    default:
      return contactsReducer
  }
}