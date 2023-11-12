import {combineReducers} from 'redux';

import ContactsReducer from './ContactsReducer';
import ItemPropertiesNamesReducer from "./ItemPropertiesNamesReducer";
import ItemsReducer from './ItemsReducer';
import ColorsReducer from "./ColorsReducer";
import AdditionalElementsReducer from "./AdditionalElementsReducer";
import MagnifyingPopupReducer from './MagnifyingPopupReducer';
import PlantsReducer from './PlantsReducer';
import LandingProductsReducer from './LandingProductsReducer';
import LandingColorsReducer from "./LandingColorsReducer";

const RootReducer = combineReducers(Object.assign({},
    ItemsReducer,
    ContactsReducer,
    ItemPropertiesNamesReducer,
    ColorsReducer,
    AdditionalElementsReducer,
    MagnifyingPopupReducer,
    PlantsReducer,
    LandingProductsReducer,
    LandingColorsReducer
));

export default RootReducer;
