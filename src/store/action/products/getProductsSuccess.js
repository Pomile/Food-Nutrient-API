import * as actionTypes from '../types';

/**
 * 
 * @param {object} data
 * @returns {object} object
 *  
 */
const getProductsSuccess = (data) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: { products: data, loadingProducts: false, productsError: false }
    }
}

export default getProductsSuccess;
