import { USER_REG_ACTION_TYPES } from '../actionTypes'

const { SET_USER_REG_MESSAGE, SET_USER_REG_TOKEN, SET_USER_REG_LOADING, SET_USER_REG_ERROR, SET_USER_REG_STATUS } = USER_REG_ACTION_TYPES

export const setRegMessage = (message) => ({ type: SET_USER_REG_MESSAGE, message })
export const setRegToken = (token) => ({ type: SET_USER_REG_TOKEN, token })
export const setRegLoading = (loading) => ({ type: SET_USER_REG_LOADING, loading })
export const setRegError = (error) => ({ type: SET_USER_REG_ERROR, error })
export const setRegStatus = (status) => ({ type: SET_USER_REG_STATUS, status })
