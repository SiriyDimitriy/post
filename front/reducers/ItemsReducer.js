import {SET_ITEM, SET_ITEMS} from '../constants/ActionTypes';
import {getCookie, setCookie} from '../utils/cookiesUtils';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_ITEMS:
            return action.items;
        default:
            return state;
    }
}

const ItemReducer = {
    items: reducer
}

export default ItemReducer;