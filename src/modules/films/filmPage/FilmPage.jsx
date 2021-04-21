import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { API_KEY } from '../../../constants/APIConfig'
import { myThunkAction } from '../../../redux/store/actions/mainFilmDataAction'

import PosterSection from './PosterSection'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffbbf0;
    overflow-y: scroll;
    height: 100%;
    color: #fff;

    &::-webkit-scrollbar-track {border-radius: 4px;}
    &::-webkit-scrollbar {width: 6px;}
    &::-webkit-scrollbar-thumb {border-radius: 4px;background: #f0f2f5;}
    &:hover::-webkit-scrollbar-thumb {background: #c4c4c4;}
`

const FilmPage = (props) => {
    const dispatcher = useDispatch()
    const requests = {
        movie: `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`,
        cast: `https://api.themoviedb.org/3/movie/${props.match.params.id}/credits?api_key=${API_KEY}`
    }
    
    const callApi = () => {
        dispatcher(myThunkAction(requests.movie, 'movie'))
        dispatcher(myThunkAction(requests.cast, 'people'))
    }

    useEffect(() => {
        callApi()
    }, [])

    return ( 
        <Wrapper>
            <PosterSection />
        </Wrapper>
    )
}

export default FilmPage
