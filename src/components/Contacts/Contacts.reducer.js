// import * as actions from './Contacts.actions'

export default function contacts(contacts = [], action) {
  switch (action.type) {
    case 'GET_CONTACTS_FULFILLED':
        return action.contacts

    // case 'RANDOM_USER_FETCHED':
    //   return {
	// 	  user	:	JSON.stringify(action.payload)
	//   }

	// case 'FETCH_USER_ERROR':
    //   return {
	// 	  user	:	action.payload.message
	//   }
    
    default:
      return contacts
  }
}