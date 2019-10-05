import utils from "../../shared/utils";
import * as actionTypes from '../action/types';

const initialState = { searchValue: '', products: [] };
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_VALUE: return utils.updateObject(state, action.payload);
        default: return state;
    }
}

export default searchReducer;
