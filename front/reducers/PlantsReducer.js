import {SET_PLANTS} from '../constants/ActionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_PLANTS:
            return action.plants;
        default:
            return state;
    }
}

const PlantsReducer = {
    plants: reducer
}

export default PlantsReducer;