import React, { Component } from 'react';
import Nav from './components/layouts/Nav';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Welcome from './components/info/Welcome';
import About from './components/info/About';
import NotFound from './components/info/NotFound';
import Dashboard from './components/dashboard/Dashboard';
import AddClient from './components/dashboard/AddClient';
import Detailes from './components/dashboard/detailes/Detailes';
import Notify from './components/info/Notify'
import Settings from './components/dashboard/Settings'
import {UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/protectRouting'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store'
import {Provider} from 'react-redux'






class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <div className="App">
              <Nav />
              <Notify />
              <Switch>
                <Route exact path='/' component={UserIsNotAuthenticated(Welcome)} />
                <Route exact path='/users/signin' component={UserIsNotAuthenticated(SignIn)} />
                <Route exact path='/users/signup' component={UserIsNotAuthenticated(SignUp)} />
                <Route exact path='/about' component={UserIsNotAuthenticated(About)} />
                <Route exact path='/dashboard' component={UserIsAuthenticated(Dashboard)} />
                <Route exact path='/client/add' component={UserIsAuthenticated(AddClient)} />
                <Route exact path='/client/detailes/:id' component={UserIsAuthenticated(Detailes)}/>
                <Route exact path='/settings' component={UserIsAuthenticated(Settings)}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
