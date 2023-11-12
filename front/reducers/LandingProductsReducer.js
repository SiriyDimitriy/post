import {SET_PRODUCTS} from '../constants/ActionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}

const LandingProductsReducer = {
    landingProducts: reducer
}

export default LandingProductsReducer;