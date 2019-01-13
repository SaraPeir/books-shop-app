import {combineReducers} from 'redux';
import {requestInfo} from './requestInfo.js';

const rootReducer = combineReducers({
    requestedInfo: requestInfo
});

export default rootReducer;