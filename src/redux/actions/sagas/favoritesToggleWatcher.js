import { call, put, takeEvery } from 'redux-saga/effects'
import { callRegServer } from '../../api'
import { setAuthError, setAuthLoading, setUserData } from '../authActions/userAuthActions'
import { TOGGLE_USER_DATA } from '../sagaActionTypes'


function* toggleFavoritesWorker({url, options}) {
    yield put(setAuthLoading(true))

    try {
        const resp = yield call(() => callRegServer(url, options))
        yield put(setUserData(resp.user_data))
    } catch (error) {
        yield put(setAuthError(true))
    } finally {
        yield put(setAuthLoading(false))
    }

}

export function* toggleFavoritesWatcher() {
    yield takeEvery(TOGGLE_USER_DATA, toggleFavoritesWorker)
}