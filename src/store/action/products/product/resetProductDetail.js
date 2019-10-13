import * as actionTypes from '../../types';

/**
 * @returns {object} object
 */
const resetProductDetail = () => {
    return {
        type: actionTypes.REST_PRODUCT_DETAIL,
        payload: {
            loadingProductDetail: false,
            productDetailError: false,
            productDetailErrorMessage: '',
            product: {}
        }
    }
}

export default resetProductDetail;
