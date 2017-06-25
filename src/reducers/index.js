import { combineReducers } from 'redux'
// import { firebaseStateReducer } from 'react-redux-firebase'

// import counter        from '../components/Counter/Counter.reducer'
// import selectedColor  from '../components/ColorPicker/ColorPicker.reducer'
// import dataCruncher from '../components/DataCruncher/DataCruncher.reducer'

import auth from '../components/Auth/Auth.reducer'
// import current_user from '../components/CurrentUser/CurrentUser.reducer'
import contactsReducer from '../components/Contacts/Contacts.reducer'
// import active_users from '../components/ActiveUsers/ActiveUsers.reducer'
// import connections from '../components/Connections/Connections.reducer'

//this is the app state
const rootReducer = combineReducers({
  // firebase: firebaseStateReducer,
  // counter,
  // selectedColor,
  // dataCruncher,
  
  auth,
  // current_user,
  contactsReducer
  // active_users, 
  // connections
})

export default rootReducer

