import * as actionTypes from '../../types';

/**
 * 
 * @param {object} data
 * @returns {object} object
 */
const getProductDetailSuccess = (data) => {
    console.log(data);
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
        payload: {
            product: data,
            loadingProductDetail: false,
            productDetailError: false,
        }
    }
}

export default getProductDetailSuccess;
