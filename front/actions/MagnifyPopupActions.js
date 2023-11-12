import * as types from '../constants/ActionTypes';

export const openMagnifyingPopup = (src) => ({
    type: types.OPEN_MAGNIFYING_POPUP,
    src
});

export const closeMagnifyingPopup = () => ({
    type: types.CLOSE_MAGNIFYING_POPUP,
});