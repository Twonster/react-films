import { call, put, takeEvery } from 'redux-saga/effects'

import { GET_FILM_FULLDATA } from '../sagaActionTypes'
import { callApi } from '../../api'
import { 
    setFilmDataSuccess, 
    setFilmDataLoading,
    setFilmDataError,
} from '../filmActions/mainFilmDataActions'

//worker
function* filmDataRequestWorker({ url, pointer }) {
    yield put(setFilmDataLoading(true, pointer))
    try {
        const resp = yield call(() => callApi(url))
        yield put(setFilmDataSuccess(resp, pointer))
    } catch (error) {
        yield put(setFilmDataError(error, pointer))
    } finally {
        yield put(setFilmDataLoading(false, pointer))
    }
}

//watcher
export function* filmDataRequestWatcher() {
    yield takeEvery(GET_FILM_FULLDATA, filmDataRequestWorker)
}