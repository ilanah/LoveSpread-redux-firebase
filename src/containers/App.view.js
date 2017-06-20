import React, { Component, PropTypes } from 'react'

// import LeftMenu from '../../components/left_menu';
// import Introduction from '../../components/introduction';
// import Footer from '../../components/footer';
// import TopMenu from '../../components/top_menu';

// import Page from '../../components/page';
// import PageHeader from '../../components/page_header';
import ContactsContainer from '../components/Contacts/Contacts.container';

import { Sidebar} from 'semantic-ui-react'

// import css from './App.css'

export default class App extends Component {
	constructor(props) {
		super(props)
/*
	this.toggleMenu = () => {
        // let togglestatus = !this.state.menuVisible;
        this.setState({ menuVisible: !this.state.menuVisible })
*/ 
	}

	render() {
		// const { 
		// 	contacts,
		// 	current_user,
		// 	connections,
		// 	active_users
		//   } = this.props
		return (
			<div className="app">
		          {/*<PageHeader currentUser={this.state.currentUser} loggedIn={true} toggleMenu={this.toggleMenu}/>*/}
          
		          <Sidebar.Pushable>

		            {/*<LeftMenu contacts={contacts} services={{}} loggedIn={true} menuVisible={false}/>*/}

		            <Sidebar.Pusher>
		              {
                      /*<Segment basic>

		                <Page contacts={contacts} currentUser={{}} loggedIn={true} menuVisible={false} />

		              </Segment>*/}
                        <div className="ui fixed text ">
                        <div className="ui large secondary  menu">
                            <a className="toc item">
                            <i className="sidebar medium icon"></i>
                            </a>
                            <div className="right item">
                            <a className="ui icon "><i className="circular user link icon black"></i></a>
                            </div>
                        </div>
                        </div>
                        <div className="ui vertical segment center aligned">
                        {
                            //#if loggedin
                        }
                                main
                                <ContactsContainer />
                        {
                            //else
                                //LOGIN BUTTONS
                        }                        
                        </div>
                        <div className="ui vertical footer segment">
                        <div className="ui container">
                            Footer
                        </div>
                        </div>
                      
		            </Sidebar.Pusher>
		          </Sidebar.Pushable>
				
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
