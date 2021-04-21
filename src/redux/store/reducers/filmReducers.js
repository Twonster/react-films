import { requestTypes } from '../actions/actionTypes'

const initialState = {
    data: {},
    loading: false,
    error: false
}

export default function filmReducer(state = initialState, action) {
    const { SET_DATA, SET_LOADING, SET_ERROR } = requestTypes

    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.query]: action.payload
                }
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
            default: return state
    }   
}