import { combineReducers } from 'redux';

import filmDataReducer from './reducers/filmDataReducer';
import filmsCardReducer from './reducers/filmsCardsReducer';
import filtersReducer from './reducers/filtersReducer';
import searchDataReducer from './reducers/searchDataReducer'
import userRegistrationDataReducer from './reducers/userRegistrationReducer'
import userAuthDataReducer from './reducers/userAuthReducer'

export default combineReducers({
    filmDataReducer,
    searchDataReducer,
    filmsCardReducer,
    filtersReducer,
    userRegistrationDataReducer,
    userAuthDataReducer
})  
