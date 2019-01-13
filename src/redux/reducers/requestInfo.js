import {REQUEST_INFO} from '../actions.js';

const initialState = {
    infoBooks: [],
    firstNameBook: ''
}

export function requestInfo(state = initialState, action){
    switch(action.type) {
        case REQUEST_INFO:
        return Object.assign({}, state, {infoBooks: action.arrayInfo, firstNameBook: action.arrayInfo[0].ficcion[0].title})
        default: 
        return state
    }
}