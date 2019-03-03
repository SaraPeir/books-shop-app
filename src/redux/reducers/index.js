import {combineReducers} from 'redux';
import {requestInfo} from './requestInfo.js';
import {mapInfo} from './mapInfo.js';
import {buildPurchaseArray} from './buildPurchaseArray.js';

const rootReducer = combineReducers({
    requestedInfo: requestInfo,
    mapInfo,
    buildPurchaseArray
});

export default rootReducer;