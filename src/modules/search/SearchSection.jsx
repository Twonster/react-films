import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { API_KEY } from '../../constants/APIConfig'
import { GET_FILMS_CARDS, GET_SEARCH_RESULTS } from '../../redux/actions/sagaActionTypes'

import ListItem from '../../components/search/ListItem'
import SearchInput from '../../components/search/SearchInput'
import { setSearchInitialValue } from '../../redux/actions/searchActions/searchActions'

const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 70px;
    z-index: 5;
`

const SearchSection = ({ history, hiding }) => {
    const { data, loading, initialValue } = useSelector(({ searchDataReducer: { response } }) => response)

    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher({
            type: GET_SEARCH_RESULTS,
            url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${initialValue}`
        })
    }, [initialValue])

    const setFilmCardsData = (event) => {
        if (event.code === 'Enter') {
            dispatcher({
                type: GET_FILMS_CARDS,
                url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${event.target.value}`
            })
            hiding()
        }
    }

    const spawnListItems = () => {
        return data.map(({ title, id, original_title }) => <ListItem hiding={hiding} history={history} key={id} filmName={original_title || title} id={id}/>).slice(0, 11)
    }
    const inputHandler = (action) => {
        dispatcher(setSearchInitialValue(action))
    }

    return (
        <Wrapper>
            <SearchInput hiding={hiding} enterAction={setFilmCardsData} history={history} value={initialValue} action={inputHandler} status={loading} />
            {data.length ? spawnListItems() : <ListItem  filmName="Not found films or TV" />}
        </Wrapper>
    )
}

export default SearchSection
