import * as types from '../constants/ActionTypes';
import routes from '../constants/Routes';
import http from '../utils/HttpService';
//-------------------- Fetch plants ------

export const plantsRequest = () => ({
    type: types.REQ_PLANTS
});

export const setPlants = (plants) => ({
    type: types.SET_PLANTS,
    plants
});

export const fetchPlants = () => dispatch => {
    dispatch(plantsRequest());
    return http
        .doGet(routes.GET_PLANTS)
        .then(result => dispatch(setPlants(result)));
};

//-------------------- Fetch products ------

export const productsRequest = () => ({
    type: types.REQ_PRODUCTS
});

export const setProducts = (products) => ({
    type: types.SET_PRODUCTS,
    products
});

export const fetchProducts = () => dispatch => {
    dispatch(productsRequest());
    return http
        .doGet(routes.GET_PRODUCTS)
        .then(result => dispatch(setProducts(result)));
};

//-------------------- Fetch colors ------

export const colorsRequest = () => ({
    type: types.REQ_COLORS
});

export const setColors = (colors) => ({
    type: types.SET_COLORS,
    colors
});

export const fetchColors = () => dispatch => {
    dispatch(colorsRequest());
    return http
        .doGet(routes.GET_COLORS)
        .then(result => dispatch(setColors(result)));
};