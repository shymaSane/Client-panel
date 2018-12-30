import  {NOTIFY_MESSAGE} from '../actions/types'

const initilaState = {
    message: null,
    message_type: null
}

export default (state=initilaState, action)=> {
    switch(action.type) {
        case NOTIFY_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                message_type: action.payload.message_type
            }
        default:
            return state
    }
        
}