const routes = {
    GET_CATALOGS: `/data/catalog_list.json`,
    GET_CATALOG_ITEM: (item) => `/data/list/${item}.json`,
    GET_CONTACTS: 'data/contacts.json',
    GET_ITEM_PROPERTIES_NAMES: 'data/itemPropertiesNames.json',
    GET_COLORS: 'data/colors.json',
    GET_PLANTS: 'data/plants.json',
    GET_PRODUCTS: 'data/landingProducts.json',
    GET_ADDITIONAL_ELEMENTS: 'data/additional_elements.json'
};

export default routes;
