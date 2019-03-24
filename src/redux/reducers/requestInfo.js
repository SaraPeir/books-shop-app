import {REQUEST_INFO} from '../actions.js';

const initialState = {
    infoBooks: []
}

export function requestInfo(state = initialState, action){
    switch(action.type) {
        case REQUEST_INFO:
        return Object.assign({}, state, {infoBooks: action.payload})
        default: 
        return state
    }
}