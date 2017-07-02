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
import { Sidebar} from 'semantic-ui-react'
import Welcome from '../components/Welcome/Welcome.view';

import css from './App.scss'

export default class App extends Component {
	constructor(props) {
		super(props)
/*
	this.toggleMenu = () => {
        // let togglestatus = !this.state.menuVisible;
        this.setState({ menuVisible: !this.state.menuVisible })
*/ 
	}
	getContent()
	{

	}
	render() {
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
						<a className="toc item">
						<i className="sidebar medium icon"></i>
						</a>
						<div className="right item">
						<a className="ui icon "><i className="circular user link icon black"></i></a>
						</div>
					</div>
				  </div>

				  <UserMenu/>

		          <Sidebar.Pushable style={{marginBottom: 2 + 'em'}}>

		            {/*<LeftMenu contacts={contacts} services={{}} loggedIn={true} menuVisible={false}/>*/}

		            <Sidebar.Pusher style={{zIndex: 2147483647/*, border: '2px solid #ececec'*/}}>
		                <div className="ui vertical segment center aligned" style={{marginTop: 3.5 + 'em'}}>
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
