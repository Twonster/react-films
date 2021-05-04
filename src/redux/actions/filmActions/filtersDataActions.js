import { FILTERS_DATA_ACTION_TYPES } from '../actionTypes'

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

export const setSortValue = (payload) => ({ type: SET_SORT_VALUE, payload }) 
export const setGenresValue = (payload) => ({ type: SET_GENRES_VALUE, payload }) 
export const setReleaseValue = (payload, pointer) => ({ type: SET_RELEASE_RANGE, payload, pointer }) 
export const setUserScoreValue = (payload) => ({ type: SET_USER_SCORE_VALUE, payload })
export const setUserVotesValue = (payload) => ({ type: SET_USER_VOTES_VALUE, payload })
export const setRuntimeRange = (payload) => ({ type: SET_RUNTIME_RANGE, payload })

export const setKeywordsData = (payload) => ({ type: SET_KEYWORDS_DATA, payload })
export const setKeywordsLoad = (loading) => ({ type: SET_KEYWORDS_LOADING, loading })
export const setKeywordsError = (error) => ({ type: SET_KEYWORDS_ERROR, error })
