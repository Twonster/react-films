import { setFilmDataSuccess, setFilmDataLoading, setFilmDataError } from '../actions/filmActions/mainFilmDataAction'

export const allFilmDataRequest = (api, query) => async (dispatch, getState) => {
    dispatch(setFilmDataLoading(true))
    try {
        const resp = await fetch(api)
        const data = await resp.json()
        dispatch(setFilmDataSuccess(data, query))
    } catch(error) {
        dispatch(setFilmDataError(error)) 
    } finally {
        dispatch(setFilmDataLoading(false))
    }
}

export const filmsCardsSearchRequest = (api, query) => async (dispatch) => {
    
} 
