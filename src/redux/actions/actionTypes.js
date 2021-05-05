export const FILM_DATA_ACTION_TYPES = Object.freeze({
    SET_FILM_DATA: 'SET_FILM_DATA',
    SET_FILM_LOADING: 'SET_FILM_LOADING',
    SET_FILM_ERROR: 'SET_FILM_ERROR',
    CLEAR_FILM_DATA: 'CLEAR_FILM_DATA',
})

export const SEARCH_DATA_ACTION_TYPES = Object.freeze({
    SET_SEARCH_RESULT_DATA: 'SET_SEARCH_RESULT_DATA',
    SET_SEARCH_LOADING: 'SET_SEARCH_LOADING',
    SET_SEARCH_ERROR: 'SET_SEARCH_ERROR',
    SET_SEARCH_IS_OPENED: 'SET_SEARCH_IS_OPENED',
    SET_SEARCH_INITIAL_VALUE: 'SET_SEARCH_INITIAL_VALUE',
})

export const FILM_CARD_ACTION_TYPES = Object.freeze({
    SET_FILMS_CARDS: 'SET_FILMS_CARDS',
    CLEAR_FILM_CARDS: 'CLEAR_FILM_CARDS',
    SET_CARDS_DATA_LOADING: 'SET_CARDS_DATA_LOADING',
    SET_CARDS_DATA_ERROR: 'SET_CARDS_DATA_ERROR'
})

export const FILTERS_DATA_ACTION_TYPES = Object.freeze({
    SET_QUERY_STRING: 'SET_QUERY_STRING',
    SET_SORT_VALUE: 'SET_SORT_VALUE',
    SET_GENRES_VALUE: 'SET_GENRES_VALUE',
    SET_RELEASE_RANGE: 'SET_RELEASE_RANGE',
    SET_USER_SCORE_VALUE: 'SET_USER_SCORE_VALUE',
    SET_USER_VOTES_VALUE: 'SET_USER_VOTES_VALUE',
    SET_RUNTIME_RANGE: 'SET_RUNTIME_RANGE',
    SET_KEYWORDS: 'SET_KEYWORDS',
    SET_KEYWORDS_DATA: 'SET_KEYWORDS_DATA',
    SET_KEYWORDS_LOADING: 'SET_KEYWORDS_LOADING',
    SET_KEYWORDS_ERROR: 'SET_KEYWORDS_ERROR'
})