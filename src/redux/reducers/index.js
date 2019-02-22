import {combineReducers} from 'redux';
import {requestInfo} from './requestInfo.js';
import {mapInfo} from './mapInfo.js';


const rootReducer = combineReducers({
    requestedInfo: requestInfo,
    mapInfo
});

export default rootReducer;