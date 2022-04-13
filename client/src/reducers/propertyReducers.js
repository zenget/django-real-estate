// action - state management

import { PROPERTY_LIST_REQUEST, PROPERTY_LIST_SUCCESS, PROPERTY_LIST_FAIL } from '../actions/types';

const initialState = {

};

const propertiesListReducers = (state = initialState, action) => {
    switch (action.type) {
        case PROPERTY_LIST_SUCCESS:
            return {
                ...state,
                properties: [],
                loading: true
            };
        case PROPERTY_LIST_SUCCESS:
            return {
                ...state,
                properties: action.payload.results,
                loading: false
            };
        case PROPERTY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
};

export default propertiesListReducers;