import { all } from 'redux-saga/effects'
import { filmDataRequestWatcher } from './filmDataRequestWatcher'
import { searchDataRequestWatcher } from './searchDataRequestWatcher'

export default function* rootSaga() {
    yield all([
        filmDataRequestWatcher(),
        searchDataRequestWatcher(),
    ])
}
