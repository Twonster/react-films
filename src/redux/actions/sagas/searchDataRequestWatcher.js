import { call, put, takeEvery } from 'redux-saga/effects'

import { callApi } from '../../api'
import { GET_SEARCH_RESULTS } from '../sagaActionTypes'
import { 
    setSearchDataSuccess, 
    setSearchDataLoading,
    setSearchDataError,
} from '../searchActions/searchActions'

//worker
function* searchDataRequestWorker({ url }) {
    yield put(setSearchDataLoading(true))
    try {
        const resp = yield call(() => callApi(url))
        yield put(setSearchDataSuccess(resp.results))
    } catch (error) {
        yield put(setSearchDataError(error))
    } finally {
        yield put(setSearchDataLoading(false))
    }
}

//watcher
export function* searchDataRequestWatcher() {
    yield takeEvery(GET_SEARCH_RESULTS, searchDataRequestWorker)
}