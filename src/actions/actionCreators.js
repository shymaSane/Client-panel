import {GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, UPDATE_CLIENT } from './types'
import firebase from '../config/FBconfig'


export const getClients = () => dispatch => {
    
    firebase.firestore().collection('dashboard')
    .onSnapshot((querySnapshot) => {
        let clients = []
        querySnapshot.forEach((doc) => {
            clients.push(doc.data())
        })
        dispatch({
            type: GET_CLIENTS,
            payload: clients
        }) 
        console.log(clients)
    })     
    
}