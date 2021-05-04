import { call, put, takeEvery } from 'redux-saga/effects'

import { callApi } from '../../api'
import { setCardsError, setCardsLoading, setFilmCards } from '../filmActions/allCardsDataAction'
import { GET_FILMS_CARDS } from '../sagaActionTypes'

//worker
function* cardsDataRequestWorker({ url }) {
    yield put(setCardsLoading(true))
    try {
        const resp = yield call(() => callApi(url))
        yield put(setFilmCards(resp.results))
    } catch (error) {
        yield put(setCardsError(error))
    } finally {
        yield put(setCardsLoading(false))
    }
}

//watcher
export function* cardsDataRequestWatcher() {
    yield takeEvery(GET_FILMS_CARDS, cardsDataRequestWorker)
}