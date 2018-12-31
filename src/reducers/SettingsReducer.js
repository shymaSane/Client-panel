 import {DISABLE_BALANCE_ON_EDIT, DISABLE_REGISTER} from '../actions/types'

 const initialState = {
     disable_balance: false,
     disable_register: false
 }

 export default (state = initialState, action) =>{
    switch(action.type){
        case DISABLE_BALANCE_ON_EDIT:
            return {
                ...state,
                disable_balance: !disable_balance
            }
        case DISABLE_REGISTER:
            return {
                ...state,
                disable_register: !disable_register
            }
        default:
            return state
    }
 }