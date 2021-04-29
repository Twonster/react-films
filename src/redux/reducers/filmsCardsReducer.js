import { FILM_DATA_REQUEST_TYPES } from '../actions/actionTypes'

const initialState = {
    response: {
        movies_list: {
            data: {},
            loading: false,
            error: false        
        },
    },
}

export default function filmsCardReducer(state = initialState, action) {
    const {  } = FILM_DATA_REQUEST_TYPES

    switch (action.type) {
        case SET_FILM_DATA:
            return {
                response: {
                    ...state.response,
                    [action.pointer]: {
                        ...state.response[action.pointer],
                        data: action.payload
                    }
                }
            };
        case CLEAR_FILM_DATA:
            return {
                response: initialState.response,
            };
        case SET_FILM_LOADING:
            return {
                response: {
                    ...state.response,
                    [action.pointer]: {
                        ...state.response[action.pointer],
                        loading: action.loading
                    }
                }
            };
        case SET_FILM_ERROR:
            return {
                response: {
                    ...state.response,
                    [action.pointer]: {
                        ...state.response[action.pointer],
                        error: action.error
                    }
                }
            };
        default: return state
    }     
}
