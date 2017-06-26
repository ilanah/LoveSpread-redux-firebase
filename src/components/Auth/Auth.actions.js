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

	// called at app start
// export const	startListeningToAuth= ()=>
// {
// 		return (dispatch,getState) => {
// 			auth.onAuth(function(authData){
// 				debugger;
// 				if (authData){ 
// 					dispatch({
// 						type: LOGIN_USER_ACTION,
// 						uid: authData.uid,
// 						username: authData.github.displayName || authData.github.username
// 					});
// 				} else {
// 					if (getState().auth.currently !== actions.ANONYMOUS_STATE){ // log out if not already logged out
// 						dispatch({type:LOGOUT_ACTION});
// 					}
// 				}
// 			});
// 		}
// }
export const	attemptLogin=(email,pass)=>
{
	console.log('====================================');
	console.log("in attemptLogin ");
	console.log('====================================');

	return (dispatch,getState)=>{
		dispatch({type:ATTEMPTING_LOGIN_ACTION, email:email, pass:pass });
		auth.signInWithEmailAndPassword(email||"", pass||"")
		.then( promise => {
			dispatch({type:LOGIN_USER_ACTION, uid:promise.uid});
		})
		.catch( error => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log("Failed to login: errorCode-"+ errorCode +" errorMessage-"+errorMessage);
				dispatch({type:LOGOUT_ACTION});
				// ...
			}
		);

	}
		// auth.authWithOAuthPopup("github", function(error, authData) {
		// 	if (error) {
		// 		// dispatch({type:actions.DISPLAY_ERROR,error:"Login failed! "+error});
		// 		dispatch({type:LOGOUT_ACTION});
		// 	} else {
		// 		// no need to do anything here, startListeningToAuth have already made sure that we update on changes
		// 	}
		// });
}
export const	logoutUser=()=>
{
	return (dispatch,getState) => {
		dispatch({type:LOGOUT_ACTION}); // don't really need to do this, but nice to get immediate feedback
		auth.unauth();
	}
}
export const changeEmail=(evt)=>
{
	return (dispatch,getState) => {
		dispatch({type:CHANGE_EMAIL,email:evt.target.value});
	}
	
}
export const changePass=(evt)=>
{
	return (dispatch,getState) => {
		dispatch({type:CHANGE_PASS,pass:evt.target.value});
	}
	
}