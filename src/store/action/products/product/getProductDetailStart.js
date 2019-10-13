import * as actionTypes from '../../types';

/**
 * @returns {object} object
 */
const getProductDetailStart = () => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_START,
        payload: {
            loadingProductDetail: true,
            productDetailError: false,
        }
    }
}

export default getProductDetailStart;