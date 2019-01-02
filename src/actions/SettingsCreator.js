import {DISABLE_BALANCE_ON_EDIT, DISABLE_REGISTER} from './types'

export const disableBalance = () =>{
    const settings = JSON.parse(localStorage.getItem('settings'))
    settings.disable_balance = ! settings.disable_balance
    localStorage.setItem('settings', JSON.stringify(settings))
    return {
        type: DISABLE_BALANCE_ON_EDIT,
        payload: settings.disable_balance
    }
}

export const disableRegister = () =>{
    const settings = JSON.parse(localStorage.getItem('settings'))
    settings.disable_register = ! settings.disable_register
    localStorage.setItem('settings', JSON.stringify(settings))
    return {
        type: DISABLE_REGISTER,
        payload: settings.disable_register
    }
}