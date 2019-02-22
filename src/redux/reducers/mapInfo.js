import {MAP_INFO} from '../actions.js';

const initialState = {
    mapped: '*****'
}

export function mapInfo(state = initialState, action){
    switch(action.type) {
        case MAP_INFO:
        return Object.assign({}, state, {mapped: action.payload})
        default: 
        return state
    }
}