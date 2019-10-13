import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {
    searchReducer,
    uiReducer,
    productDetailReducer
} from './reducers';
const { NODE_ENV } = process.env;
const middleware = NODE_ENV === 'production' ? [thunk] : [thunk, logger];
const composeEnhancers = NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        limit: 25
    }): null || compose;
const store = createStore(combineReducers({
    search: searchReducer,
    ui: uiReducer,
    product: productDetailReducer
}), {}, composeEnhancers(applyMiddleware(...middleware)));

export default store;