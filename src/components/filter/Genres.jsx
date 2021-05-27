import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Tag } from 'antd';
import { callApi } from '../../redux/api';
import { API_KEY } from '../../constants/APIConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setGenresValue } from '../../redux/actions/filmActions/filtersDataActions';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

`
const StyledTag = styled(Tag.CheckableTag)`
    margin: 0 5px 5px 0;
`

const GenresList = (props) => {
    const dispatcher = useDispatch()
    const activeTabs = useSelector(({ filtersReducer: { genres_value } }) => genres_value)
    
    const [genresFetchData, setGenresFetchData] = useState([])
    
    useEffect(async () => {
        const data = await callApi(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        setGenresFetchData(data.genres)
    }, [dispatcher])
    

    const genresHandler = (id, checked) => {
        const nextSelectedTags = checked ? [...activeTabs, id] : activeTabs.filter(t => t !== id);
        dispatcher(setGenresValue(nextSelectedTags))
    }


    const spawnList = () => {
        return genresFetchData.map(item => {
           return (
                <StyledTag 
                    key={item.id}
                    checked={activeTabs.includes(item.id)}
                    onChange={ checked => genresHandler(item.id, checked) } 
                >
                    {item.name}
                </StyledTag>
            ) 
        })
    }

    return (
        <Wrapper>
            {spawnList()}
        </Wrapper>
    )
}

export default GenresList
