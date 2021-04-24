import { all } from 'redux-saga/effects'
import { filmDataRequestWatcher } from './filmDataRequestWatcher'

export default function* rootSaga() {
    yield all([
        filmDataRequestWatcher(),
    ])
}
