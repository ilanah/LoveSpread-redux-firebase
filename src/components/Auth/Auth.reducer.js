import * as actions from "./Auth.actions"

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
export default function auth (currentstate=initialAuth,action)
{
	switch(action.type){
		case actions.CHANGE_EMAIL:
			return {
				currently: actions.ANONYMOUS,
				username: null,
				uid: null,
				email: action.email,
				pass: ""
			};
		case actions.CHANGE_PASS:
			return {
				currently: actions.ANONYMOUS,
				username: null,
				uid: null,
				email: currentstate.email,
				pass: action.pass
			};
		case actions.ATTEMPTING_LOGIN_ACTION:
			return {
				currently: actions.AWAITING_AUTH_RESPONSE_STATE,
				username: "guest",
				uid: null,
				email: currentstate.email,
				pass: currentstate.pass
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
				username: action.username,
				uid: action.uid,
				email: "",
				pass: ""
			};
		default: return currentstate;// || initialAuth;
	}
};