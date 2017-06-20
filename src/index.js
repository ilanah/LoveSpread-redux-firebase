import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/app_container';

const main = (
  <Provider store={store}>
    <AppContainer />
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