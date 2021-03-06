import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as actions from "./Auth.actions";

import css from './Auth.scss';
import cn from 'classnames';
import {Button,Label,Input,Form} from 'semantic-ui-react';

export default class AuthPanel extends Component 
{
  constructor(props) {
    super(props)
  }
  getLogin() {
        let {email,pass}=this.props;
    return (
        <div className="authpanel ui container segment">
            <Form>
                <Form.Field>
                <label>Email</label>
                <Input id="email" placeholder='name@server.com' onChange={(evt)=> this.props.changeEmail(evt)} value={email}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <Input id="pass" type="password" placeholder='password' onChange={(evt)=> this.props.changePass(evt)} value={pass}/>
                </Form.Field>
                <Form.Field>
                {/*<Checkbox label='I agree to the Terms and Conditions' />*/}
                </Form.Field>
                <Button type='button' onClick={()=> this.props.attemptLogin(email,pass)} content="Log in" href="/#/"/>
            </Form>     
            {/*
                <div class="ui middle aligned center aligned grid">
                    <div class="column">
                        <h2 class="ui teal image header">
                        <img src="assets/images/logo.png" class="image">
                        <div class="content">
                            Log-in to your account
                        </div>
                        </h2>
                        <form class="ui large form">
                        <div class="ui stacked segment">
                            <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address">
                            </div>
                            </div>
                            <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Password">
                            </div>
                            </div>
                            <div class="ui fluid large teal submit button">Login</div>
                        </div>

                        <div class="ui error message"></div>

                        </form>

                        <div class="ui message">
                        New to us? <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>                            
            */}                    
        </div>
    );
  }
  render() {
		// const auth_details = this.props.auth;
		switch(this.props.currently)
        {
			case actions.LOGGED_IN_STATE: 
                return (
                    <div className="authpanel ui container segment ">
                        <Label>Logged in as {this.props.username}.</Label>
                        {' '}<Button onClick={this.props.logoutUser()} content="Log out"/>
                    </div>
                );
			case actions.AWAITING_AUTH_RESPONSE_STATE: 
                return (
                    <div className="authpanel ui container segment ">
                        <Button loading={true} disabled content="authenticating..."/>
                    </div>
                );
			default: 
                return (
            <div className={`${css.app}`}>
                  {/*<PageHeader currentUser={this.state.currentUser} loggedIn={true} toggleMenu={this.toggleMenu}/>*/}
                  
                  <div className={`ui fixed text ${css.fixed} ${css.header}`} /*style={{zIndex: 2147483646}}*/>
                    <div className="ui large secondary  menu">
                        <a className="toc item">
                        <i className="sidebar medium icon"></i>
                        </a>
                        <div className="right item">
                        <a className="ui icon "><i className="circular user link icon black"></i></a>
                        </div>
                    </div>
                  </div>

                  {/* <UserMenu/> */}

                  {/* <Sidebar.Pushable style={{marginBottom: 2 + 'em'}}>

                    <Sidebar.Pusher style={{zIndex: 2147483647}}>*/}
                        <div className="ui vertical segment center aligned" style={{marginTop: 3.5 + 'em'}}>
                        { this.getLogin() }
                        </div>
                      
                  {/*   </Sidebar.Pusher>
                  </Sidebar.Pushable>*/}

                <div className={`ui ${css.fixed} ${css.footer}`}>
                    <div className="ui container">
                        Footer
                    </div>
                </div>
                
            </div>



                );
		}
	}
};