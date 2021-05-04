import { FILTERS_DATA_ACTION_TYPES } from '../actions/actionTypes'

const initialState = {
    sort_value: '',
    genres_value: '',
    release_range: {
        from: '',
        to: '',
    },
    user_score_value: 0,
    user_votes_value: 0,
    runtime_range: [0, 400],
    keywords: {
        data: [],
        loading: false,
        error: false
    }
}

export default function filtersReducer(state = initialState, action) {
    const { 
        SET_SORT_VALUE,
        SET_GENRES_VALUE,
        SET_RELEASE_RANGE, 
        SET_USER_SCORE_VALUE,
        SET_USER_VOTES_VALUE,
        SET_RUNTIME_RANGE,
        SET_KEYWORDS_DATA,
        SET_KEYWORDS_LOADING,
        SET_KEYWORDS_ERROR
    } = FILTERS_DATA_ACTION_TYPES

    switch (action.type) {
        case SET_SORT_VALUE:
            return {
                ...state,
                genres_value: action.payload
            }
        case SET_GENRES_VALUE:
            return {
                ...state,
                genres_value: action.payload
            }
        case SET_RELEASE_RANGE:
            return {
                ...state,
                release_range: {
                    ...state.release_range,
                    [action.payload.pointer]: action.payload.value
                }
            }
        case SET_USER_SCORE_VALUE:
            return {
                ...state,
                user_score_value: action.payload
            }
        case SET_USER_VOTES_VALUE:
            return {
                ...state,
                user_votes_value: action.payload
            }
        case SET_RUNTIME_RANGE:
            return {
                ...state,
                runtime_range: action.payload
            }
        case SET_KEYWORDS_DATA:
            return {
                ...state,
                keywords: {
                    ...state.keywords,
                    data: action.payload
                }
            }
        case SET_KEYWORDS_LOADING:
            return {
                ...state,
                keywords: {
                    ...state.keywords,
                    loading: action.loading
                }
            }
        case SET_KEYWORDS_ERROR:
            return {
                ...state,
                keywords: {
                    ...state.keywords,
                    error: action.error
                }
            }
        default: return state  
    }
} 