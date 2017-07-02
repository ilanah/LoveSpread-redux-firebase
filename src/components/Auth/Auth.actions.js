import {auth, database} from '../../store';
import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

	// AUTH ACTIONS
export const	LOGIN_USER_ACTION= "LOGIN_USER"
export const	LOGOUT_ACTION= "LOGOUT"
export const	CHANGE_EMAIL= "CHANGE_EMAIL"
export const	CHANGE_PASS= "CHANGE_PASS"

	// AUTH STATES
export const	ATTEMPTING_LOGIN_STATE= "ATTEMPTING_LOGIN"
export const	ANONYMOUS_STATE= "ANONYMOUS"
export const	AWAITING_AUTH_RESPONSE_STATE= "AWAITING_AUTH_RESPONSE"
export const	LOGGED_IN_STATE= "LOGGED_IN"
export const    FAILED_LOGIN = "FAILED_LOGIN"

/*
 * action creators
 */
// export const decrement = ()=> ({ type: DECREMENT })
export function requestLogin (email,pass) {
  return {
    type: AWAITING_AUTH_RESPONSE_STATE,
    email,
	pass
  }
}
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(attemptLogin('email','pass'))

export function attemptLogin (email,pass) {
  	// Thunk middleware knows how to handle functions. 
  	// It passes the dispatch method as an argument to the function, thus making it able to dispatch actions itself.
  	return function (dispatch) { 

		dispatch(requestLogin(email,pass));

		return auth.signInWithEmailAndPassword(email||"", pass||"") //fetch(`https://randomuser.me/api/`).then((res) => res.json())																 
		.then(
			reponse => reponse,//.json(),
			error => dispatch(failedLogin(error))
		)
		.then( json => dispatch(receiveLogin(json)))
		// .then( ()=> ))
	}
}
		// auth.authWithOAuthPopup("github", function(error, authData) {
		// 	if (error) {
		// 		// dispatch({type:actions.DISPLAY_ERROR,error:"Login failed! "+error});
		// 		dispatch({type:LOGOUT_ACTION});
		// 	} else {
		// 		// no need to do anything here, startListeningToAuth have already made sure that we update on changes
		// 	}
		// });
export function receiveLogin (json) {
  	// return function (dispatch) { 
	// 	dispatch(push('/user/:1'));
		localStorage.setItem("uid",json.uid);
		return {
			type: LOGIN_USER_ACTION,
			currentUser : json,//.children.map(child => child.data),
			receivedAt: Date.now(),
			pass: ""
		}
  	// }
}
export const failedLogin = (err)=>
{
	return {type:FAILED_LOGIN, payload:err};
}
export const loggedIn = (promise)=>
{
	return {type:LOGIN_USER_ACTION, uid:promise.uid, payload:promise}
}

export const logoutUser = ()=> {
		localStorage.removeItem("uid");
		auth.signOut();
		return {type:LOGOUT_ACTION}; // don't really need to do this, but nice to get immediate feedback
}
export const changeEmail=(evt)=>
{
	return {type:CHANGE_EMAIL,email:evt.target.value};	
}
export const changePass=(evt)=>
{
	return{type:CHANGE_PASS,pass:evt.target.value};	
}