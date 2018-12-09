import React, { Component } from 'react';
import Nav from './components/layouts/Nav';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path='/users/signin' component={SignIn} />
              <Route exact path='/users/signup' component={SignUp} />
            </Switch>
          </div>
        </Router>
     
    );
  }
}

export default App;
