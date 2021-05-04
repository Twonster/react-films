import { combineReducers } from 'redux';
import filmDataReducer from './reducers/filmDataReducer';
import filmsCardReducer from './reducers/filmsCardsReducer';
import filtersReducer from './reducers/filtersReducer';
import searchDataReducer from './reducers/searchDataReducer'

export default combineReducers({
    filmDataReducer,
    searchDataReducer,
    filmsCardReducer,
    filtersReducer
})  