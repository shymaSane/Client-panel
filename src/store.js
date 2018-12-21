import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore' ;


// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDL_PVBXVdEP1TbAKbPQ3UrzkT6ZW-FIQA",
    authDomain: "client-panel-eb7c4.firebaseapp.com",
    databaseURL: "https://client-panel-eb7c4.firebaseio.com",
    projectId: "client-panel-eb7c4",
    storageBucket: "client-panel-eb7c4.appspot.com",
    messagingSenderId: "393307131223"
  }


// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize Firestore with timeshot settings
firebase.firestore().settings({ timestampsInSnapshots: true })

const firestore = firebase.firestore()

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, rrfConfig)
  )(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer 
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))



export default store;
