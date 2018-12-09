import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
apiKey: "AIzaSyC_q921fwMQroeV1y90A-6ceWGjsFxYx3Y",
authDomain: "client-panel-3e604.firebaseapp.com",
databaseURL: "https://client-panel-3e604.firebaseio.com",
projectId: "client-panel-3e604",
storageBucket: "client-panel-3e604.appspot.com",
messagingSenderId: "81863483064"
};

firebase.initializeApp(config);
//this for the warnings in cosoule, it can be annoying
firebase.firestore().settings({timestampsInSnapshots: ture})

export default firebase;
