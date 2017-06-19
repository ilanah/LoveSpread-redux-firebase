import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import "./stylesheets/main.scss";
import AppContainer from './containers/app_container';
import ContactsContainer from './components/Contacts/Contacts.container';

const main = (
  <Provider store={store}>
    <ContactsContainer />
  </Provider>
);
// const main=(
//     <Provider store={store}>
//         <Router>
//          <Application/>
//         </Router>
//     </Provider>
// );
ReactDOM.render(main, document.querySelector('.main'));  