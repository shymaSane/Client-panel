import {GET_CLIENTS, GET_CLIENT} from './types'
import firebase from '../config/FBconfig'


export const getClients = () => dispatch => {
    
    firebase.firestore().collection('dashboard').orderBy('balance')
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

export const addClient = (client) => () => {
    firebase.firestore().collection('dashboard').add(client)
    .then((docRef) => console.log(docRef))
}

export const getClient = (id) => dispatch =>{
    firebase.firestore().collection("dashboard").doc(id)
    .onSnapshot((doc) => 
        dispatch({
            type: GET_CLIENT,
            payload: doc.data()
        })
    )
}

export const updateClient = (client, id) => () => {
    firebase.firestore().collection("dashboard").doc(id)
    .update({
        ...client
    })
}

export const deleteClient = (id) => () =>{
    firebase.firestore().collection("dashboard").doc(id).delete()
    .then(() => console.log('deleted'))
}