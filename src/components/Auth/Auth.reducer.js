import * as actions from "./Auth.actions"
import {auth} from '../../store';
/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.auth data.
See `initialstate.js` for a clear view of what it looks like!
*/
const initialAuth= {
		currently: actions.ANONYMOUS,
		username: null,
		uid: null,
		email: "",
		pass: ""
	}

// module.exports = function(currentstate=initialAuth,action){
export default function authReducer (currentstate=initialAuth,action)
{
	switch(action.type){
		case actions.CHANGE_EMAIL:
			return {
				currently: actions.CHANGE_EMAIL,
				username: null,
				uid: null,
				email: action.email,
				pass: ""
			};
		case actions.CHANGE_PASS:
			return {
				currently: actions.CHANGE_PASS,
				username: null,
				uid: null,
				email: currentstate.email,
				pass: action.pass
			};
		case actions.ATTEMPTING_LOGIN_ACTION:
			// auth.signInWithEmailAndPassword(action.email||"", action.pass||"")
			// .then( promise => {
			// 	dispatch({type:actions.LOGIN_USER_ACTION, uid:promise.uid});
			// })
			// .catch( error => {
			// 		// Handle Errors here.
			// 		var errorCode = error.code;
			// 		var errorMessage = error.message;
			// 		console.log("Failed to login: errorCode-"+ errorCode +" errorMessage-"+errorMessage);
			// 		dispatch({type:actions.LOGOUT_ACTION});
			// 		// ...
			// 	}
			// );
		
			return {
				currently: actions.AWAITING_AUTH_RESPONSE_STATE,
				username: "guest",
				uid: null,
				email: action.email,
				pass: action.pass
			};
		case actions.LOGOUT_ACTION:
			return {
				currently: actions.ANONYMOUS_STATE,
				username: "guest",
				uid: null,
				email: "",
				pass: ""
			};
		case actions.LOGIN_USER_ACTION:
			return {
				currently: actions.LOGGED_IN_STATE,
				// username: currentstate.username,
				uid: action.uid,
				// email: currentstate.email,
				// pass: ""
			};
		default: return currentstate;// || initialAuth;
	}
};