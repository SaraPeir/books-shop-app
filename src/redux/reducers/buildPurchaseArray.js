import {BUILD_PURCHASE_ARRAY} from '../actions.js';

const initialState = {
    arrayBooks: []
}

export function buildPurchaseArray(state = initialState, action){
    switch(action.type) {
        case BUILD_PURCHASE_ARRAY:
        return Object.assign({}, state, {arrayBooks: action.payload})
        default: 
        return state
    }
}