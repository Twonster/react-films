import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortQuery } from '../../redux/actions/filmActions/filtersDataActions'
import { GET_FILMS_CARDS } from '../../redux/actions/sagaActionTypes'

const ApplyFiltersButton = () => {
    const {
        query,
        sort_value,
        genres_value,
        release_range: { from, to },
        user_score_value,
        user_votes_value,
        runtime_range: [runGte, runLte],
        keywords,
    } = useSelector(({ filtersReducer }) => filtersReducer)

    const dispatcher = useDispatch()
    const createQuery = () => {
        const sortQuery = sort_value ? `sort_by=${sort_value}&` : ''
        const genresQuery = genres_value.length ? `with_genres=${genres_value.join(',')}&` : ''
        // const releaseRangeQuery = 
        const userScoreQueryGTE = user_score_value.length ? `vote_average.gte=${user_score_value[0]}&` : ''
        const userScoreQueryLTE = user_score_value.length ? `vote_average.lte=${user_score_value[1]}&` : ''
        const userVotesQuery = user_votes_value ? `vote_count.gte=${user_votes_value}&` : ''
        const runtimeGTEQuery = `with_runtime.gte=${runGte}&`
        const runtimeLTEQuery = `with_runtime.lte=${runLte}&`
        const keywordsQuery = keywords.length ? `with_keywords=${keywords.join(',')}&` : ''

        dispatcher(setSortQuery(sortQuery + genresQuery + userScoreQueryGTE + userScoreQueryLTE + userVotesQuery + runtimeGTEQuery + runtimeLTEQuery + keywordsQuery))
        dispatcher({
            type: GET_FILMS_CARDS,
            url: query
        })
    }
    
    return <Button onClick={createQuery} block shape="round" type="primary" >Apply filters</Button>
}

export default ApplyFiltersButton
