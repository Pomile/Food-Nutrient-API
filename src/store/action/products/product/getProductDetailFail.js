import * as actionTypes from '../../types';

/**
 * 
 * @param {string} err 
 * @returns {object} object
 */
const getProductDetailFail = (err) => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
        payload: {
            loadingProductDetail: false,
            productDetailError: true,
            productDetailErrorMessage: err.message
        }
    }
}

export default getProductDetailFail;
