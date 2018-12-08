import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_q921fwMQroeV1y90A-6ceWGjsFxYx3Y",
    authDomain: "client-panel-3e604.firebaseapp.com",
    databaseURL: "https://client-panel-3e604.firebaseio.com",
    projectId: "client-panel-3e604",
    storageBucket: "client-panel-3e604.appspot.com",
    messagingSenderId: "81863483064"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
