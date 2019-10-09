import * as actionTypes from '../types';

const getProductsSuccess = (data) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: { products: data, loading: false, error: false }
    }
}

export default getProductsSuccess;
