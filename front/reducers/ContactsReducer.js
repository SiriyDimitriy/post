import {SET_CONTACTS} from '../constants/ActionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CONTACTS:
            return action.contacts;
        default:
            return state;
    }
}

const ContactsReducer = {
    contacts: reducer
}

export default ContactsReducer;