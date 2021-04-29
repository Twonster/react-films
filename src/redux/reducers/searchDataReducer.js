import { SEARCH_DATA_ACTION_TYPES } from '../actions/actionTypes'

const initialState = {
    response: {
        data: [],
        loading: false,
        error: false,
        isOpened: false,
        initialValue: 'marvel'        
    },
}

export default function searchDataReducer(state = initialState, action) {
    const { SET_SEARCH_RESULT_DATA, SET_SEARCH_LOADING, SET_SEARCH_ERROR, SET_SEARCH_IS_OPENED, SET_SEARCH_INITIAL_VALUE } = SEARCH_DATA_ACTION_TYPES

    switch (action.type) {
        case SET_SEARCH_RESULT_DATA:
            return {
                response: {
                    ...state.response,
                    data: action.payload
                }
            };
        case SET_SEARCH_IS_OPENED:
            return {
                response: {
                    ...state.response,
                    isOpened: action.toggle
                },
            };
        case SET_SEARCH_INITIAL_VALUE:
            return {
                response: {
                    ...state.response,
                    initialValue: action.initialValue
                },
            };
        case SET_SEARCH_LOADING:
            return {
                response: {
                    ...state.response,
                    loading: action.loading
                }
            };
        case SET_SEARCH_ERROR:
            return {
                response: {
                    ...state.response,
                    error: action.error
                }
            };
        default: return state
    }     
}
