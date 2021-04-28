import { SEARCH_DATA_ACTION_TYPES } from "../actionTypes"

const { SET_SEARCH_RESULT_DATA, SET_SEARCH_LOADING, SET_SEARCH_ERROR, SET_SEARCH_IS_OPENED, SET_SEARCH_INITIAL_VALUE } = SEARCH_DATA_ACTION_TYPES

export const setSearchDataSuccess = (payload) => ({type: SET_SEARCH_RESULT_DATA, payload}) 
export const setSearchDataLoading = (loading) => ({type: SET_SEARCH_LOADING, loading}) 
export const setSearchDataError = (error) => ({type: SET_SEARCH_ERROR, error}) 
export const setSearchShowingStatus = (toggle) => ({type: SET_SEARCH_IS_OPENED, toggle}) 
export const setSearchInitialValue = (initialValue) => ({type: SET_SEARCH_INITIAL_VALUE, initialValue}) 
