import { call, put, takeEvery } from 'redux-saga/effects'

import { callApi } from '../../api'
import { 
    setFilmDataSuccess, 
    setFilmDataLoading,
    setFilmDataError,
} from '../filmActions/mainFilmDataActions'
const pause = new Promise((res, rej) => setTimeout(res, 5000))
//worker
function* filmDataRequestWorker({ url, pointer }) {
    console.log(url, pointer)
    yield put(setFilmDataLoading(true, pointer))
    try {
        const resp = yield call(() => callApi(url))
        yield put(setFilmDataSuccess(resp, pointer))
    } catch (error) {
        yield put(setFilmDataError(error, pointer))
    } finally {
        // pause()
        yield put(setFilmDataLoading(false, pointer))
    }
}

//watcher
export function* filmDataRequestWatcher() {
    yield takeEvery('GET_FILM_FULLDATA', filmDataRequestWorker)
}