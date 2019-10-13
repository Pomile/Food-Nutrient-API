import utils from "../../shared/utils";
import * as actionTypes from '../action/types';

const initialState = {
    loadingProductDetail: false,
    productDetailError: false,
    productDetailErrorMessage: '',
    product: {}
};
const getProductDetailStart = (state, action) => {
    
    return utils.updateObject(state, action.payload)
}

const getProductDetailFail = (state, action) => {

    return utils.updateObject(state, action.payload)
}

const getProductDetailSuccess = (state, action) => {

    return utils.updateObject(state, action.payload)
}

const resetProductDetail = (state, action) => {

    return utils.updateObject(state, action.payload)
}

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAIL_START: return getProductDetailStart(state, action);
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS: return getProductDetailSuccess(state, action);
        case actionTypes.GET_PRODUCT_DETAIL_FAIL: return getProductDetailFail(state, action);
        case actionTypes.REST_PRODUCT_DETAIL: return resetProductDetail(state, action);
        default: return state;
    }
}

export default productDetailReducer;
