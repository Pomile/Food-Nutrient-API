import * as actionTypes from '../types';

/**
 * 
 * @param {string} err 
 */
const getProductsFail = (err) => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
        payload: { loadingProducts: false, productsError: true, productsErrorMessage: err.message }
    }
}

export default getProductsFail;
