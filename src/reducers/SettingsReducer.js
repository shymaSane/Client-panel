 import {DISABLE_BALANCE_ON_EDIT, DISABLE_REGISTER} from '../actions/types'

 const settingsState = {
     disable_balance: false,
     disable_register: false
 }

 export default (state=settingsState, action) => {
    switch(action.type){
        case DISABLE_BALANCE_ON_EDIT:
            return {
                ...state,
                disable_balance: !state.disable_balance
            }
        case DISABLE_REGISTER:
            return {
                ...state,
                disable_register: !state.disable_register
            }
        default:
            return state
    }
 }