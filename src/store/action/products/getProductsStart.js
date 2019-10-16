import * as actionTypes from '../types';

/**
 * @returns {object} object
 */
const getProductsStart = () => {
    return {
        type: actionTypes.GET_PRODUCTS_START,
        payload: { loadingProducts: true, productsError: false }
    }
}

export default getProductsStart;
