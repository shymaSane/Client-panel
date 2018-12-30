import {NOTIFY_MESSAGE} from './types'



export const notifyChange = (messageObject) => {
    return {
        type: NOTIFY_MESSAGE,
        payload: messageObject
    }
}