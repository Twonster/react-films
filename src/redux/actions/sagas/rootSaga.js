import { all } from 'redux-saga/effects'
import { authWatcher } from './AuthWatcher'
import { cardsDataRequestWatcher } from './cardsDataRequestWatcher'
import { toggleFavoritesWatcher } from './favoritesToggleWatcher'
import { filmDataRequestWatcher } from './filmDataRequestWatcher'
import { searchDataRequestWatcher } from './searchDataRequestWatcher'

export default function* rootSaga() {
    yield all([
        filmDataRequestWatcher(),
        searchDataRequestWatcher(),
        cardsDataRequestWatcher(),
        authWatcher(),
        toggleFavoritesWatcher()
    ])
}
