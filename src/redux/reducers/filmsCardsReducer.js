import { FILM_CARD_ACTION_TYPES } from '../actions/actionTypes'

const initialState = {
    query: '',
    current_page: 1,
    data: [],
    results_count: 0,
    loading: false,
    error: false 
}

export default function filmsCardReducer(state = initialState, action) {
    const { SET_FILMS_CARDS, CLEAR_FILM_CARDS, SET_CARDS_DATA_LOADING, SET_CARDS_DATA_ERROR, SET_QUERY_STRING, SET_CURRENT_PAGE } = FILM_CARD_ACTION_TYPES

    switch (action.type) {
        case SET_QUERY_STRING:
            return {
                ...state,
                query: action.query,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                current_page: action.page,
            };
        case SET_FILMS_CARDS:
            return {
                ...state,
                data: action.payload.results,
                results_count: action.payload.total_results,
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
