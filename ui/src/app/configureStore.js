import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import createRootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
    const initialState = {
        reports: []
    };

    return createStore(
        createRootReducer,
        initialState,
        applyMiddleware(
            promiseMiddleware,
            thunkMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
