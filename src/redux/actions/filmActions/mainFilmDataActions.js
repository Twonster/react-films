import { FILM_DATA_ACTION_TYPES } from "../actionTypes"

const { SET_FILM_DATA, SET_FILM_LOADING, SET_FILM_ERROR, CLEAR_FILM_DATA } = FILM_DATA_ACTION_TYPES

export const setFilmDataSuccess = (payload, pointer) => ({type: SET_FILM_DATA, payload, pointer}) 
export const setFilmDataLoading = (loading, pointer) => ({type: SET_FILM_LOADING, loading, pointer}) 
export const setFilmDataError = (error, pointer) => ({type: SET_FILM_ERROR, error, pointer}) 
export const setFilmDataClear = (payload) => ({type: CLEAR_FILM_DATA, payload}) 

