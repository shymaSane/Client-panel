import React, { Component } from 'react';
import Nav from './layouts/Nav';
import SignIn from './auth/SignIn'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SignIn />
      </div>
    );
  }
}

export default App;
