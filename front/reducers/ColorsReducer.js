import {SET_COLORS} from '../constants/ActionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_COLORS:
            return action.colors;
        default:
            return state;
    }
}

const ColorsReducer = {
    colors: reducer
}

export default ColorsReducer;