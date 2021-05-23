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
    SET_CARDS_DATA_ERROR: 'SET_CARDS_DATA_ERROR',
    SET_QUERY_STRING: 'SET_QUERY_STRING',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE'
})

export const FILTERS_DATA_ACTION_TYPES = Object.freeze({
    SET_SORT_VALUE: 'SET_SORT_VALUE',
    SET_GENRES_VALUE: 'SET_GENRES_VALUE',
    SET_RELEASE_RANGE: 'SET_RELEASE_RANGE',
    SET_USER_SCORE_VALUE: 'SET_USER_SCORE_VALUE',
    SET_USER_VOTES_VALUE: 'SET_USER_VOTES_VALUE',
    SET_RUNTIME_RANGE: 'SET_RUNTIME_RANGE',
    SET_KEYWORDS: 'SET_KEYWORDS',
    SET_KEYWORDS_DATA: 'SET_KEYWORDS_DATA',
    SET_KEYWORDS_LOADING: 'SET_KEYWORDS_LOADING',
    SET_KEYWORDS_ERROR: 'SET_KEYWORDS_ERROR',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE'
})

export const USER_REG_ACTION_TYPES = Object.freeze({
    SET_USER_REG_MESSAGE: 'SET_USER_REG_MESSAGE',
    SET_USER_REG_LOADING: 'SET_USER_REG_LOADING',
    SET_USER_REG_ERROR: 'SET_USER_REG_ERROR',
    SET_USER_REG_STATUS: 'SET_USER_REG_STATUS',
    CLEAR_USER_REG_DATA: 'CLEAR_USER_REG_DATA',
    SET_USER_IS_REGISTRED: 'SET_USER_IS_REGISTRED'
})

export const USER_AUTH_ACTION_TYPES = Object.freeze({
    SET_USER_AUTH_MESSAGE: 'SET_USER_AUTH_MESSAGE',
    SET_USER_AUTH_TOKEN: 'SET_USER_AUTH_TOKEN',
    SET_USER_AUTH_LOADING: 'SET_USER_AUTH_LOADING',
    SET_USER_AUTH_ERROR: 'SET_USER_AUTH_ERROR',
    SET_USER_AUTH_STATUS: 'SET_USER_AUTH_STATUS',
    SET_USER_IS_AUTORISED: 'SET_USER_IS_AUTORISED',
    CLEAR_USER_AUTH_DATA: 'CLEAR_USER_AUTH_DATA',
    SET_USER_DATA: 'SET_USER_DATA'
})