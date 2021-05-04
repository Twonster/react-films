import { all } from 'redux-saga/effects'
import { cardsDataRequestWatcher } from './cardsDataRequestWatcher'
import { filmDataRequestWatcher } from './filmDataRequestWatcher'
import { searchDataRequestWatcher } from './searchDataRequestWatcher'

export default function* rootSaga() {
    yield all([
        filmDataRequestWatcher(),
        searchDataRequestWatcher(),
        cardsDataRequestWatcher(),
    ])
}
