import {SET_COLORS} from '../constants/ActionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_COLORS:
            return action.colors;
        default:
            return state;
    }
};

const LandingColorsReducer = {
    landingColors: reducer
};

export default LandingColorsReducer;