import utils from "../../shared/utils";
import * as actionTypes from '../action/types';

const initialState = {
    loadingProducts: false,
    productsError: false,
    productsErrorMessage: '',
    searchValue: 'pizza',
    products: []
};
/**
 *
 * @param {object} state
 * @param {object} action
 * @returns {object} object
 */
const getProductsStart = (state, action) => {
    
    return utils.updateObject(state, action.payload)
}
/**
 *
 * @param {object} state
 * @param {object} action
 * @returns {object} object
 */
const getProductsFail = (state, action) => {
    
    return utils.updateObject(state, action.payload)
}
/**
 *
 * @param {object} state
 * @param {object} action
 * @returns {object} object
 */
const getProductsSuccess = (state, action) => {
    
    return utils.updateObject(state, action.payload)
}

/**
 * 
 * @param {object} state 
 * @param {object} action
 * @returns {object} object 
 */
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
