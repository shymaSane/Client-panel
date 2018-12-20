import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore'
import ClientReducers from './ClientReducers'

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    client: ClientReducers
})