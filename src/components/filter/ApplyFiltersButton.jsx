import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_KEY } from '../../constants/APIConfig'
import { GET_FILMS_CARDS } from '../../redux/actions/sagaActionTypes'
import { setCurrentPage, setQueryString } from '../../redux/actions/filmActions/allCardsDataAction'
const ApplyFiltersButton = () => {
    const API_QUERY = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&`

    const {
        sort_value,
        genres_value,
        release_range: { from, to },
        user_score_value,
        user_votes_value,
        runtime_range: [runGte, runLte],
        keywords,
    } = useSelector(({ filtersReducer }) => filtersReducer)
    
    const dispatcher = useDispatch()
    const queries = {
        sortQuery: sort_value ? `sort_by=${sort_value}` : '',
        genresQuery: genres_value.length ? `with_genres=${genres_value.join(',')}` : '',
        userScoreQueryGTE: user_score_value.length ? `vote_average.gte=${user_score_value[0]}` : '',
        releaseFromQuery: from ? `release_date.gte=${from}` : '',
        releaseToQuery: to ? `release_date.lte=${to}` : '',
        userScoreQueryLTE: user_score_value.length ? `vote_average.lte=${user_score_value[1]}` : '',
        userVotesQuery: user_votes_value ? `vote_count.gte=${user_votes_value}` : '',
        runtimeGTEQuery: `with_runtime.gte=${runGte}`,
        runtimeLTEQuery: `with_runtime.lte=${runLte}`,
        keywordsQuery: keywords.length ? `with_keywords=${keywords.join(',')}` : '',
    }

    const requestQuery = Object.values(queries).filter(item => item !== '').join('&')

    const createQuery = () => {
        dispatcher(setQueryString(`${API_QUERY}${requestQuery}`))
        dispatcher(setCurrentPage(1))
        dispatcher({
            type: GET_FILMS_CARDS,
            url: `${API_QUERY}${requestQuery}`
        })
    }

    
    return <Button onClick={createQuery} block shape="round" type="primary" >Apply filters</Button>
}

export default ApplyFiltersButton
