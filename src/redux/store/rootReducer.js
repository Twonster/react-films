import { combineReducers } from 'redux';
import filmDataReducer from './reducers/filmDataReducer';
import searchDataReducer from './reducers/searchDataReducer'

export default combineReducers({
    filmDataReducer,
    searchDataReducer,
})