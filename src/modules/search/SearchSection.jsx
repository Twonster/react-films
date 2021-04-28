import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { API_KEY } from '../../constants/APIConfig'
import { GET_SEARCH_RESULTS } from '../../redux/store/actions/sagaActionTypes'

import ListItem from '../../components/search/ListItem'
import SearchInput from '../../components/search/SearchInput'
import { setSearchInitialValue } from '../../redux/store/actions/searchActions/searchActions'


const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 70px;
    z-index: 5;
`

const SearchSection = ({ history, hiding }) => {
    // const [value, setValue] = useState('marvel')
    const { data, error, loading, initialValue } = useSelector(({ searchDataReducer: { response } }) => response)

    const dispatcher = useDispatch()

    
    // const [data, setData] = useState([])

    useEffect(() => {
        dispatcher({
            type: GET_SEARCH_RESULTS,
            url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${initialValue}`
        })
    }, [initialValue])


    const spawnListItems = () => {
        return data.map(({ name, title, id }) => <ListItem hiding={hiding} history={history} key={id} filmName={title || name} id={id}/>).slice(0, 11)
    }
    const inputHandler = (event) => {
        event.target.value === '' ? dispatcher(setSearchInitialValue(initialValue)) : dispatcher(setSearchInitialValue(event.target.value))
    }

    return (
        <Wrapper>
            <SearchInput history={history} value={initialValue} action={inputHandler} status={loading} />
            {data.length ? spawnListItems() : <ListItem  filmName="Not ound films or TV" /> }
        </Wrapper>
    )
}

export default SearchSection
