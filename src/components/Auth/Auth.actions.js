import {auth, database} from '../../store';
	// AUTH ACTIONS
export const	ATTEMPTING_LOGIN_ACTION= "ATTEMPTING_LOGIN"
export const	LOGIN_USER_ACTION= "LOGIN_USER"
export const	LOGOUT_ACTION= "LOGOUT"
export const	CHANGE_EMAIL= "CHANGE_EMAIL"
export const	CHANGE_PASS= "CHANGE_PASS"

	// AUTH STATES
export const	ANONYMOUS_STATE= "ANONYMOUS"
export const	AWAITING_AUTH_RESPONSE_STATE= "AWAITING_AUTH_RESPONSE"
export const	LOGGED_IN_STATE= "LOGGED_IN"
export const    FAILED_LOGIN = "FAILED_LOGIN"
// export const decrement = ()=> ({ type: DECREMENT })

export const attemptLogin = (email,pass)=> (
	(dispatch) => {

		dispatch({type:ATTEMPTING_LOGIN_ACTION, email:email, pass:pass })

		auth.signInWithEmailAndPassword(email||"", pass||"") //fetch(`https://randomuser.me/api/`).then((res) => res.json())																 
		.then((promise) => dispatch(loggedIn(promise)))
		.catch((err) => dispatch(failedLogin(err)))
	  }
	)

		// auth.authWithOAuthPopup("github", function(error, authData) {
		// 	if (error) {
		// 		// dispatch({type:actions.DISPLAY_ERROR,error:"Login failed! "+error});
		// 		dispatch({type:LOGOUT_ACTION});
		// 	} else {
		// 		// no need to do anything here, startListeningToAuth have already made sure that we update on changes
		// 	}
		// });

const failedLogin = (err)=>
{
	return {type:FAILED_LOGIN, payload:err};
}
const loggedIn = (promise)=>
{
	return {type:LOGIN_USER_ACTION, uid:promise.uid, payload:promise}
}

export const logoutUser = ()=> {
		// debugger;
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