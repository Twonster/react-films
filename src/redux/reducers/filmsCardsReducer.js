import { FILM_CARD_ACTION_TYPES } from '../actions/actionTypes'

const initialState = {
    data: [],
    loading: false,
    error: false 
}

export default function filmsCardReducer(state = initialState, action) {
    const { SET_FILMS_CARDS, CLEAR_FILM_CARDS, SET_CARDS_DATA_LOADING, SET_CARDS_DATA_ERROR } = FILM_CARD_ACTION_TYPES

    switch (action.type) {
        case SET_FILMS_CARDS:
            return {
                ...state,
                data: action.payload
            };
        case CLEAR_FILM_CARDS:
            return {
                ...initialState,
            };
        case SET_CARDS_DATA_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SET_CARDS_DATA_ERROR:
            return {
                ...state,
                error: action.error
            };
        default: return state
    }     
}
