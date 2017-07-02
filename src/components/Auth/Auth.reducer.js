import * as actions from "./Auth.actions"
import {auth} from '../../store';
/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.auth data.
See `initialstate.js` for a clear view of what it looks like!
*/
const initialAuth= {
		username: null,
		uid: null,
		email: "",
		pass: ""
	}

export default function authReducer (state=initialAuth,action)
{
	switch(action.type){
		case actions.CHANGE_EMAIL:
			return Object.assign({}, state, 
				{
					email: action.email,
					pass: ""
				}
			)
		case actions.CHANGE_PASS:
			return Object.assign({}, state, 
				{
					pass: action.pass
				}
			)
		case actions.ATTEMPTING_LOGIN_STATE:	
			return Object.assign({}, state, 
				{
					username: "guest"//,
				}
			)
		case actions.LOGIN_USER_ACTION:
			return Object.assign({}, state, 
				{
					currentUser: action.currentUser
				}
			)
		case actions.FAILED_LOGIN:
			console.log (action.payload.stack);
			alert(action.payload.message);
			// 		// Handle Errors here.
			// 		var errorCode = action.payload.code;
			// 		var errorMessage = action.payload.message;
			// 		if (errorCode === 'auth/wrong-password') {
			// 			alert('Wrong password.');
			// 		} else {
			// 			alert(errorMessage);
			// 		}
			// 		console.log(error);
			// 		dispatch(logoutUser);
			return state;
		case actions.LOGOUT_ACTION:
			return Object.assign({}, state, 
				{
					username: "guest",
					uid: null,
					email: "",
					pass: ""
				}
			)
		
		default: return state;
	}
};