import * as actions from './Contacts.actions'

const contactsReducerInitialState = {
      isFetching: true,
      didInvalidate: false,
      contacts: [],
      msg:"Charging the energy..."
}
export default function contactsReducer(state=contactsReducerInitialState, action) {
  switch (action.type) {
    case actions.GET_CONTACTS_REQUESTED:
        return Object.assign({}, state, {
            didInvalidate: true,
            isFetching: true,
            msg: "Loading contacts..."
        })
        // return {
        //     isFetching: true,
        //     didInvalidate: false,
        //     contacts: state.contacts,
        //     msg: "Loading contacts..."
        // }
    case actions.GET_CONTACTS_REJECTED:
       return Object.assign({}, state, {
            didInvalidate: true,
            isFetching: false,
            msg: "Failed to load contacts"
        })
        // return {
        //     isFetching: false,
        //     didInvalidate: true,
        //     contacts: state.contacts,
        //     msg: "Failed to load contacts"
        // }
    case actions.GET_CONTACTS_FULFILLED:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        contacts: action.contacts,
        msg:"Loaded "+ Object.keys(action.contacts).length + " contacts",
        lastUpdated: action.receivedAt
      })
        // return {
        //     isFetching: false,
        //     didInvalidate: false,
        //     contacts: action.contacts,
        //     msg:"Loaded "+ Object.keys(action.contacts).length + " contacts" 
        // }
    default:
      return state
  }
}