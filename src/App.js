import React, { Component } from 'react';
import Nav from './components/layouts/Nav';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Welcome from './components/info/Welcome';
import About from './components/info/About';
import NotFound from './components/info/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route exact path='/users/signin' component={SignIn} />
              <Route exact path='/users/signup' component={SignUp} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
     
    );
  }
}

export default App;
