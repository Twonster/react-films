import { requestTypes } from '../actions/actionTypes'

const initialState = {
    response: {
        movie: {
            data: {},
            loading: false,
            error: false        
        },
        peoples: {
            data: {},
            loading: false,
            error: false        
        }
    },
}

export default function filmDataReducer(state = initialState, action) {
    const { SET_FILM_DATA, SET_FILM_LOADING, SET_FILM_ERROR, CLEAR_FILM_DATA } = requestTypes

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