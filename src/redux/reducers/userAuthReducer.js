import { USER_REG_ACTION_TYPES } from '../actions/actionTypes'

const { SET_USER_REG_MESSAGE, SET_USER_REG_LOADING, SET_USER_REG_ERROR, SET_USER_REG_STATUS } = USER_REG_ACTION_TYPES

const initialState = {
    isAutorized: false,
    message: '',
    status: '',
    loading: false,
    error: false
}

export default function userAuthDataReducer(state = initialState, action) {
    
    switch (action.type) {
        case SET_USER_REG_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        case SET_USER_REG_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_REG_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SET_USER_REG_ERROR:
            return {
                ...state,
                error: action.error
            };
        default: return state
    }     
}