import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, HashRouter,Route,Links,Switch} from 'react-router-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import store from './store';
import AppContainer from './containers/app_container';
// import Welcome from './components/Welcome/Welcome.view';
import AuthContainer from './components/Auth/Auth.container';

// const history = syncHistoryWithStore(browserHistory, store);
const main = (
  <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <HashRouter /*history={history}*/>
            <Switch>
              <Route exact path="/" component={AppContainer}/>
              <Route path="/login" component={AuthContainer}/>
{/*           <Route exact path="/" component={Welcome}/>
              <Route path="/user/:id" component={AppContainer}/>*/}
            </Switch>
        </HashRouter>
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