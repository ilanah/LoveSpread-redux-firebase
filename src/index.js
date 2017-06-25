import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, HashRouter,Route,Links,Switch} from 'react-router-dom';

import store from './store';
import AppContainer from './containers/app_container';
import Welcome from './components/Welcome/Welcome.view';

const main = (
  <Provider store={store}>
        <HashRouter>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/login" /*component={Home}*/><div>Login</div></Route>
              <Route path="/user/:id" component={AppContainer}/>
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