import { connect } from 'react-redux';
import {auth} from '../../store';

import * as actions from "./Auth.actions";

import AuthPanel from './Auth.view';

function mapStateToProps(state) {
    // const auth = state.firebase.get("auth");
	// return {
    //     auth:auth,
    //     email:auth!=null?auth.email:"",
    //     pass:auth!=null?auth.pass:""
    // };
    return state;
}

function mapDispatchToProps(dispatch) {
  return {
      attemptLogin: ()=> dispatch(actions.attemptLogin()),
      logoutUser: ()=> dispatch(actions.logoutUser()),
      startListeningToAuth: ()=> dispatch(actions.startListeningToAuth()),
      changeEmail: (evt)=>dispatch(actions.changeEmail(evt)),
      changePass: (evt)=>dispatch(actions.changePass(evt)),
//    onGetContacts: () => dispatch(getContacts())
  };
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthPanel);

export default AuthContainer;