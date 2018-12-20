import React, { Component } from 'react';
import Nav from './components/layouts/Nav';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Welcome from './components/info/Welcome';
import About from './components/info/About';
// import NotFound from './components/info/NotFound';
import Dashboard from './components/dashboard/Dashboard';
import AddClient from './components/dashboard/AddClient';
import Detailes from './components/dashboard/detailes/Detailes';

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
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route exact path='/users/signin' component={SignIn} />
              <Route exact path='/users/signup' component={SignUp} />
              <Route exact path='/about' component={About} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/client/add' component={AddClient} />
              <Route exact path='/client/detailes/:id' component={Detailes}/>
              {/* <Route component={NotFound}/> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
