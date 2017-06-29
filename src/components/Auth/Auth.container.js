import { connect } from 'react-redux';

import {auth} from '../../store';

import * as actions from "./Auth.actions";

import AuthPanel from './Auth.view';

function mapStateToProps(state) {
    // debugger;
    // const fb_auth = state.firebase.get("auth");
	// return {
    //     fb_auth:fb_auth,
    // };
    return state.authReducer;
}

function mapDispatchToProps(dispatch) {
  return {
      attemptLogin: (email,pass)=> dispatch(actions.attemptLogin(email,pass)),
      logoutUser: ()=> dispatch(actions.logoutUser()),
    //   startListeningToAuth: ()=> dispatch(actions.startListeningToAuth()),
      changeEmail: (evt)=>dispatch(actions.changeEmail(evt)),
      changePass: (evt)=>dispatch(actions.changePass(evt)),
//    onGetContacts: () => dispatch(getContacts())
  };
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthPanel);

export default AuthContainer;