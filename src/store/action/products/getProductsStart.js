import * as actionTypes from '../types';

const getProductsStart = (state, action) => {
    return {
        type: actionTypes.GET_PRODUCTS_START,
        payload: { loading: true, error: false }
    }
}

export default getProductsStart;
