import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {
    searchReducer,
    uiReducer
} from './reducers';
const { NODE_ENV } = process.env;
const myLogger = NODE_ENV === 'development'? logger : null;
const composeEnhancers = NODE_ENV ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(combineReducers({
    search: searchReducer,
    ui: uiReducer
}), {}, composeEnhancers(applyMiddleware(myLogger, thunk)));

export default store;