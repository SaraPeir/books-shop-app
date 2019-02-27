import {MAP_INFO} from '../actions.js';

const initialState = {
    ficcion: '*****',
    noFiccion: '******'
}

export function mapInfo(state = initialState, action){
    switch(action.type) {
        case MAP_INFO:
        return Object.assign({}, state, {ficcion: action.payload.ficcionArray, noFiccion: action.payload.noFiccionArray})
        default: 
        return state
    }
}