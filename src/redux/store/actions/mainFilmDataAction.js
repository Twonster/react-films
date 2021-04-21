import { requestTypes } from "./actionTypes"

const { SET_DATA, SET_LOADING, SET_ERROR } = requestTypes

const setDataSuccess = (payload, query) => ({type: SET_DATA, payload, query}) 
const setDataLoading = (loading) => ({type: SET_LOADING, loading}) 
const setDataError = (error) => ({type: SET_ERROR, error}) 

const pause = () => new Promise((res, rej) => setTimeout(res, 2000))

export const myThunkAction = (api, query) => async (dispatch, getState) => {
    dispatch(setDataLoading(true))
        try {
            const resp = await fetch(api)
            const data = await resp.json()
            console.log(data)
            dispatch(setDataSuccess(data, query))
        } catch(error) {
            dispatch(setDataError(error)) 
        } finally {
            await pause()
            dispatch(setDataLoading(false))
        }
}
