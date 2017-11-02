import React, { Component, PropTypes } from 'react'

// import LeftMenu from '../../components/left_menu';
// import Introduction from '../../components/introduction';
// import Footer from '../../components/footer';
// import TopMenu from '../../components/top_menu';

// import Page from '../../components/page';
// import PageHeader from '../../components/page_header';
import ContactsContainer from '../components/Contacts/Contacts.container';
import UserMenu from '../components/UserMenu/UserMenu.view';
import MainButton from '../components/MainButton/MainButton.view';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import Welcome from '../components/Welcome/Welcome.view';

import css from './App.scss'

export default class App extends Component {
	constructor(props) {
		super(props)
		  
		this.state = { menuVisible: false };
	}
	toggleVisibility() {
		this.setState({ menuVisible: !this.state.menuVisible });
	}
	getContent()
	{

	}
	render() {
		const { menuVisible } = this.state
		// const { 
		// 	contacts,
		// 	current_user,
		// 	connections,
		// 	active_users
		//   } = this.props
		return (		
			<div className={`${css.app}`}>
		          {/*<PageHeader currentUser={this.state.currentUser} loggedIn={true} toggleMenu={this.toggleMenu}/>*/}
				  
				  <div className={`ui fixed text ${css.fixed} ${css.header}`} /*style={{zIndex: 2147483646}}*/>
					<div className="ui large secondary  menu">
						<a className="toc item" onClick={() => this.toggleVisibility()}>
						<i className="sidebar medium icon"></i>
						</a>
						<div className="right item">
						  <UserMenu isLoggedIn={this.props.isLoggedIn}/>
						</div>
					</div>
				  </div>

		          <Sidebar.Pushable as={Segment} style={{marginBottom: 2 + 'em', marginTop: 3.5 + 'em'}}>

		            {/*<LeftMenu contacts={contacts} services={{}} loggedIn={true} menuVisible={false}/>*/}
		            <Sidebar as={Menu} width='thin' visible={menuVisible} icon='labeled' vertical inverted>
			            <Menu.Item name='home'>
			              <Icon name='home' />
			              Home
			            </Menu.Item>
			            <Menu.Item name='gamepad'>
			              <Icon name='gamepad' />
			              Games
			            </Menu.Item>
			            <Menu.Item name='camera'>
			              <Icon name='camera' />
			              Channels
			            </Menu.Item>
			        </Sidebar>

		            <Sidebar.Pusher style={{zIndex: 2147483647/*, border: '2px solid #ececec'*/}}>
		                <div className="ui vertical segment center aligned">
						{
							this.props.isLoggedIn ?
								<div id="main" class="flex column  center" >
									<div class="flex row child fixed">
										<MainButton/>								
									</div>
									<ContactsContainer />
								</div>
							:
								//LOGIN BUTTONS
								<Welcome/>
							
						}
                        </div>
                      
		            </Sidebar.Pusher>
		          </Sidebar.Pushable>

				<div className={`ui ${css.fixed} ${css.footer}`}>
					<div className="ui container">
						Footer
					</div>
				</div>
				
			{/*
				<Counter
					value={counter}
					onIncrement={doIncrement}
					onDecrement={doDecrement}
				/>
				<DataCruncher fetchData={doFetchRandomUser} user={dataCruncher.user} />
				<ColorPicker setColor={setColor}/>
				<ColorViewer selectedColor={selectedColor} />
			*/}
			</div>
		)
	}

}
