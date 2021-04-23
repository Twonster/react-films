import { requestTypes } from "../actionTypes"

const { SET_CARDS_DATA, SET_CARDS_LOADING, SET_REQUEST_ERROR, CLEAR_CARDS_DATA } = requestTypes

export const setDataSuccess = (payload, query) => ({type: SET_CARDS_DATA, payload, query}) 
export const setDataLoading = (loading) => ({type: SET_CARDS_LOADING, loading}) 
export const setDataError = (error) => ({type: SET_REQUEST_ERROR, error}) 
export const setDataClear = (payload) => ({type: CLEAR_CARDS_DATA, payload}) 