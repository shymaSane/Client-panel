import {GET_CLIENTS, ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, UPDATE_CLIENT } from '../actions/types'

const initialState = {
    clients: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        default:
            return state
    }
}