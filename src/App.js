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
// import store from './store'
import {Provider} from 'react-redux'

//firestore v3:
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import createReduxStore from './createReduxStore';
import {createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase';
import 'firebase/firestore';

// object containing Firebase config
const fbConfig = {
  apiKey: "AIzaSyC_q921fwMQroeV1y90A-6ceWGjsFxYx3Y",
  authDomain: "client-panel-3e604.firebaseapp.com",
  databaseURL: "https://client-panel-3e604.firebaseio.com",
  projectId: "client-panel-3e604",
  storageBucket: "client-panel-3e604.appspot.com",
  messagingSenderId: "81863483064"
} 

const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

// Initialize firebase instance
firebase.initializeApp(fbConfig)

const store = createReduxStore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
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
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
