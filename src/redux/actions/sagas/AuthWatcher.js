import { call, put, takeEvery } from 'redux-saga/effects'
import { callRegServer } from '../../api'
import { setRegError, setRegLoading, setRegMessage, setRegStatus } from '../authActions/userRegAction'
import { AUTORISE_USER, CREATE_USER_DATA } from '../sagaActionTypes'

function* userRegWorker({ url, options }) {
    yield put(setRegLoading(true))
    try {
        
        const resp = yield call(() => callRegServer(url, options))
        yield put(setRegMessage(resp.message))
        yield put(setRegStatus(resp.status))

        if (resp.status === 400) {
            throw new Error(true)
        } else {
            yield put(setRegError(false))
        }

    } catch (error) {
        yield put(setRegError(true))
    } finally {
        yield put(setRegLoading(false))
    }
}

const setUserToken = (token) => {
    localStorage.setItem('token', `bearer ${token}`)
}

function* userAuthWorker({ url, options }) {
    yield put(setRegLoading(true))
    try {
        
        const resp = yield call(() => callRegServer(url, options))
        yield put(setRegMessage(resp.message))
        yield put(setRegStatus(resp.status))

        if (resp.status === 400) {
            throw new Error(true)
        } else {
            yield put(setRegError(false))
        }
        setUserToken(resp.token)
        
    } catch (error) {
        yield put(setRegError(true))
    } finally {
        yield put(setRegLoading(false))
    }
}
export function* authWatcher() {
    yield takeEvery(CREATE_USER_DATA, userRegWorker)
    yield takeEvery(AUTORISE_USER, userAuthWorker)
}