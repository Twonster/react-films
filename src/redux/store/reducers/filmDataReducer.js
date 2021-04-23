import { requestTypes } from '../actions/actionTypes'

const initialState = {
    data: {},
    loading: false,
    error: false
}

export default function filmDataReducer(state = initialState, action) {
    const { SET_FILM_DATA, SET_FILM_LOADING, SET_FILM_ERROR, CLEAR_FILM_DATA } = requestTypes

    switch (action.type) {
        case SET_FILM_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.query]: action.payload
                }
            };
        case CLEAR_FILM_DATA:
            return {
                ...state,
                data: action.payload
            };
        case SET_FILM_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SET_FILM_ERROR:
            return {
                ...state,
                error: action.error
            };
            default: return state
    }   
}