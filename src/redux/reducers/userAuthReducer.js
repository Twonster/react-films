import { USER_AUTH_ACTION_TYPES } from '../actions/actionTypes'

const { 
    SET_USER_AUTH_MESSAGE,
    SET_USER_IS_AUTORISED, 
    SET_USER_AUTH_LOADING, 
    SET_USER_AUTH_ERROR, 
    SET_USER_AUTH_STATUS, 
    SET_USER_DATA 
} = USER_AUTH_ACTION_TYPES

const initialState = {
    isAutorised: false,
    message: '',
    status: '',
    loading: false,
    error: false,
    user_data: {}
}

export default function userAuthonDataReducer(state = initialState, action) {
    
    switch (action.type) {
        case SET_USER_AUTH_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        case SET_USER_AUTH_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_AUTH_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SET_USER_AUTH_ERROR:
            return {
                ...state,
                error: action.error
            };
        case SET_USER_IS_AUTORISED:
            return {
                ...state,
                isAutorised: action.payload
            };
        case SET_USER_DATA:
            return {
                ...state,
                user_data: action.payload
            };
        default: return state
    }     
}