import {GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, UPDATE_CLIENT } from './types'
import firebase from '../config/FBconfig'


export const getClients = () => dispatch => {
    
    firebase.firestore().collection('dashboard').orderBy('name')
    .onSnapshot((querySnapshot) => {
        let clients = []
        querySnapshot.forEach((doc) => {
            clients.push({ ...doc.data(), id: doc.id})
        })
        dispatch({
            type: GET_CLIENTS,
            payload: clients
        }) 
        
    })     
    
}

export const addClient = (client) => dispatch => {
    firebase.firestore().collection('dashboard').add(client)
    .then((docRef) => console.log(docRef))
}