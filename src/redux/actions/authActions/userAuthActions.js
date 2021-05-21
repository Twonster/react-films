import { USER_AUTH_ACTION_TYPES } from '../actionTypes'

const { SET_USER_AUTH_MESSAGE, SET_USER_AUTH_TOKEN, SET_USER_AUTH_LOADING, SET_USER_AUTH_ERROR, SET_USER_AUTH_STATUS, SET_USER_IS_AUTORISED } = USER_AUTH_ACTION_TYPES

export const setAuthMessage = (message) => ({ type: SET_USER_AUTH_MESSAGE, message })
export const setAuthToken = (token) => ({ type: SET_USER_AUTH_TOKEN, token })
export const setAuthLoading = (loading) => ({ type: SET_USER_AUTH_LOADING, loading })
export const setAuthError = (error) => ({ type: SET_USER_AUTH_ERROR, error })
export const setAuthStatus = (status) => ({ type: SET_USER_AUTH_STATUS, status })

export const setUserIsAutorised = (payload) => ({ type: SET_USER_IS_AUTORISED, payload })
