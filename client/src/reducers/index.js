import { combineReducers } from 'redux';

// reducer import
import propertiesListReducers from './propertyReducers';

//-----------------------|| COMBINE REDUCER ||-----------------------//

const reducer = combineReducers({
    propertiesList: propertiesListReducers,
});

export default reducer;
