import {combineReducers} from 'redux';
import ClientReducers from './ClientReducers'

export default combineReducers({
    client: ClientReducers
})