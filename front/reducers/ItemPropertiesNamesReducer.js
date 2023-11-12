import {SET_ITEM_PROPERTIES} from "../constants/ActionTypes";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ITEM_PROPERTIES:
            return action.propertyNames;
        default:
            return state;
    }
}

const ItemPropertiesNamesReducer = {
    itemPropertiesNames: reducer
}

export default ItemPropertiesNamesReducer;
