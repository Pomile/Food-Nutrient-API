import utils from "../../shared/utils";
import * as actionTypes from '../action/types';
const initialState = {
    showSideDrawer: false,
    useHeaderBg: false,
    showModal: false,
    error: false,
    errorMessage: '',
};
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SIDEDRAWER_STATE:
            return utils.updateObject(state, { showSideDrawer: !state.showSideDrawer }); 
        case actionTypes.SET_HEADER_BG:
            return utils.updateObject(state, { useHeaderBg: !state.useHeaderBg });
        case actionTypes.SET_MODAL_STATE:
            return utils.updateObject(state, { showModal: !state.showModal });
        default: return state
    }
}

export default uiReducer;