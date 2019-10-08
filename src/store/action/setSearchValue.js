import * as actionTypes from './types';
const setSearchValue = (event) => {
    event.preventDefault();
    return {
        type: actionTypes.SET_SEARCH_VALUE,
        payload: { searchValue: event.target.value }
    }
}

export default setSearchValue;
