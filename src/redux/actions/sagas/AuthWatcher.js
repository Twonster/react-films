import { call, put, takeEvery } from 'redux-saga/effects'
import { callRegServer } from '../../api'
import { setAuthError, setAuthLoading, setAuthMessage, setAuthStatus, setAuthToken, setUserIsAutorised } from '../authActions/userAuthActions'
import { setIsRegistred, setRegError, setRegLoading, setRegMessage, setRegStatus } from '../authActions/userRegAction'
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
            yield put(setIsRegistred(true))
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
    yield put(setAuthLoading(true))
    try {
        
        const resp = yield call(() => callRegServer(url, options))
        console.log(resp)
        yield put(setAuthMessage(resp.message))
        yield put(setAuthStatus(resp.status))

        if (resp.status === 400) {
            throw new Error(true)
        } else {
            yield put(setAuthError(false))
        }
        setUserToken(resp.token)
        yield put(setUserIsAutorised(true))
    } catch (error) {
        yield put(setAuthError(true))
    } finally {
        yield put(setAuthLoading(false))
    }
}
export function* authWatcher() {
    yield takeEvery(CREATE_USER_DATA, userRegWorker)
    yield takeEvery(AUTORISE_USER, userAuthWorker)
}