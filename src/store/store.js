import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {
    searchReducer,
    uiReducer
} from './reducers';
const { NODE_ENV } = process.env;
const middleware = NODE_ENV === 'production' ? [thunk] : [thunk, logger];
const composeEnhancers = NODE_ENV ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(combineReducers({
    search: searchReducer,
    ui: uiReducer
}), {}, composeEnhancers(applyMiddleware(...middleware)));

export default store;