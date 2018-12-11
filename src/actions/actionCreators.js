import {GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, UPDATE_CLIENT } from './types'
import firebase from '../config/FBconfig'


export const getClients = () => dispatch => {
    let clients = []
    firebase.firestore().collection('dashboard').get()
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            clients.push(doc.data())
           
        })
    })
    .then(() =>{
        dispatch({
            type: GET_CLIENTS,
            payload: clients
        })
    })
}