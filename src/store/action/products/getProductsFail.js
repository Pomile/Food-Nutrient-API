import * as actionTypes from '../types';

const getProductsFail = (err) => {
    return {
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload: { loading: false, error: true, errorMessage: err.message }
    }
}

export default getProductsFail;
