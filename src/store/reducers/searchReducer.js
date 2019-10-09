import utils from "../../shared/utils";
import * as actionTypes from '../action/types';
import * as actions from '../action/index';

const initialState = {
    searchValue: 'pizza',
    loading: false,
    error: false,
    errorMessage: '',
    products: []
};
const getProductsStart = (state, action) => {
    const update = {
        loading: true,
        error: false
    }
    return utils.updateObject(state, update)
}

const getProductsFail = (state, action) => {
    
    return utils.updateObject(state, action.payload)
}

const getProductsSuccess = (state, action) => {
    
    return utils.updateObject(state, action.payload)
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_VALUE: return utils.updateObject(state, action.payload);
        case actionTypes.GET_PRODUCTS_START: return getProductsStart(state, action);
        case actionTypes.GET_PRODUCTS_SUCCESS: return getProductsSuccess(state, action);
        case actionTypes.GET_PRODUCTS_FAIL: return getProductsFail(state, action);
        default: return state;
    }
}

export default searchReducer;
