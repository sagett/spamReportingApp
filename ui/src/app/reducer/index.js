import { RECIEVE_INITIAL_DATA, UPDATE_REPORT_STATE } from '../action';
import { combineReducers } from 'redux';
//import { connectRouter } from 'connected-react-router';

const { routerReducer } = require('react-router-redux');


function reports(state = {}, action) {
    switch (action.type) {
        case RECIEVE_INITIAL_DATA:
            let nextState = action.data
            return nextState;
        case UPDATE_REPORT_STATE:
            return state;
        default:
            return state;
    }
}

const createRootReducer = combineReducers({
    reports,
    routing: routerReducer
});

export default createRootReducer;
