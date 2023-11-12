import {SET_ADDITIONAL_ELEMENTS} from '../constants/ActionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_ADDITIONAL_ELEMENTS:
            return action.elements;
        default:
            return state;
    }
}

const AdditionalElementsReducer = {
    additionalElements: reducer
}

export default AdditionalElementsReducer;