import {DISABLE_BALANCE_ON_EDIT, DISABLE_REGISTER} from './types'

export const disableBalance = () =>{
    return {
        type: DISABLE_BALANCE_ON_EDIT
    }
}

export const disableRegister = () =>{
    return {
        type: DISABLE_REGISTER
    }
}