import * as types from '../constants/ActionTypes';
import http from '../utils/HttpService';
import routes from '../constants/Routes';

//-------------------- Fetch catalogs ------

export const catalogRequest = () => ({
    type: types.REQ_CATALOG,
});

export const setItems = (items) => ({
    type: types.SET_ITEMS,
    items
});

export const fetchCatalog = () => dispatch => {
    dispatch(catalogRequest());
    return http
        .doGet(routes.GET_CATALOGS)
        .then(catalogs => {
            const itemsPromises = catalogs.map(catalog => http.doGet(routes.GET_CATALOG_ITEM(catalog)));
            return Promise.all(itemsPromises);
        })
        .then(items => dispatch(setItems(items)));
};


//-------------------- Fetch contacts ------

export const contactsRequest = () => ({
    type: types.REQ_CONTACTS
});

export const setContacts = (contacts) => ({
    type: types.SET_CONTACTS,
    contacts
})

export const fetchContacts = () => dispatch => {
    dispatch(contactsRequest());
    return http
        .doGet(routes.GET_CONTACTS)
        .then(result => dispatch(setContacts(result)));
}

//-------------------- Fetch item properties names ------

export const itemPropertiesNamesRequest = () => ({
    type: types.REQ_ITEM_PROPERTIES
});

export const setItemPropertiesNames = (propertyNames) => ({
    type: types.SET_ITEM_PROPERTIES,
    propertyNames
})

export const fetchItemPropertiesNames = () => dispatch => {
    dispatch(itemPropertiesNamesRequest());
    return http
        .doGet(routes.GET_ITEM_PROPERTIES_NAMES)
        .then(result => dispatch(setItemPropertiesNames(result)));
}

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

//-------------------- Fetch additional elements ------

export const additionalElementsRequest = () => ({
    type: types.REQ_ADDITIONAL_ELEMENTS
});

export const setAdditionalElements = (elements) => ({
    type: types.SET_ADDITIONAL_ELEMENTS,
    elements
});

export const fetchAdditionalElements = () => dispatch => {
    dispatch(additionalElementsRequest());
    return http
        .doGet(routes.GET_ADDITIONAL_ELEMENTS)
        .then(result => dispatch(setAdditionalElements(result)));
};
