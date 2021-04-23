import { requestTypes } from "../actionTypes"

const { SET_FILM_DATA, SET_FILM_LOADING, SET_FILM_ERROR, CLEAR_FILM_DATA } = requestTypes

export const setFilmDataSuccess = (payload, query) => ({type: SET_FILM_DATA, payload, query}) 
export const setFilmDataLoading = (loading) => ({type: SET_FILM_LOADING, loading}) 
export const setFilmDataError = (error) => ({type: SET_FILM_ERROR, error}) 
export const setFilmDataClear = (payload) => ({type: CLEAR_FILM_DATA, payload}) 

