import { FILM_CARD_ACTION_TYPES } from "../actionTypes"

const { SET_FILMS_CARDS, CLEAR_FILM_CARDS, SET_CARDS_DATA_LOADING, SET_CARDS_DATA_ERROR, SET_QUERY_STRING, SET_CURRENT_PAGE } = FILM_CARD_ACTION_TYPES

export const setFilmCards = (payload) => ({ type: SET_FILMS_CARDS, payload }) 
export const clearFilmCards = (payload) => ({ type: CLEAR_FILM_CARDS, payload }) 
export const setCardsLoading = (loading) => ({type: SET_CARDS_DATA_LOADING, loading}) 
export const setCardsError = (error) => ({type: SET_CARDS_DATA_ERROR, error}) 
export const setQueryString = (query) => ({ type: SET_QUERY_STRING, query }) 
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page }) 
