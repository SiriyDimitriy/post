import {CLOSE_MAGNIFYING_POPUP, OPEN_MAGNIFYING_POPUP} from '../constants/ActionTypes';

const reducer = (state = {open: false}, action) => {
    switch (action.type) {
        case OPEN_MAGNIFYING_POPUP:
            if (!action.src) {
                return state;
            }
            return {
                open: true,
                src: action.src
            };
        case CLOSE_MAGNIFYING_POPUP:
            return {
                open: false,
                src: null
            };
        default:
            return state;
    }
}

const MagnifyingPopupReducer = {
    magnifyingPopup: reducer
}

export default MagnifyingPopupReducer;