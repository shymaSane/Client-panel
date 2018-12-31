import  {NOTIFY_MESSAGE} from '../actions/types'

const initialState = {
    message: null,
    message_type: null
}

export default (state=initialState, action)=> {
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