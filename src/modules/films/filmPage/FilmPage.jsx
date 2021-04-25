import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { API_KEY } from '../../../constants/APIConfig'

import { setFilmDataClear } from '../../../redux/store/actions/filmActions/mainFilmDataActions'
import FilmContent from './contant/FilmContent'

import PosterSection from './poster/PosterSection'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    height: 100%;
    color: #fff;
`
const FilmPage = (props) => {
    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher({
            type: 'GET_FILM_FULLDATA',
            url: `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`,
            pointer: 'movie',
        })
        dispatcher({
            type: 'GET_FILM_FULLDATA',
            url: `https://api.themoviedb.org/3/movie/${props.match.params.id}/credits?api_key=${API_KEY}`,
            pointer: 'peoples',
        })
        dispatcher({
            type: 'GET_FILM_FULLDATA',
            url: `https://api.themoviedb.org/3/movie/${props.match.params.id}/external_ids?api_key=${API_KEY}`,
            pointer: 'external_ids',
        })
        dispatcher({
            type: 'GET_FILM_FULLDATA',
            url: `https://api.themoviedb.org/3/movie/${props.match.params.id}/keywords?api_key=${API_KEY}`,
            pointer: 'keywords',
        })
        dispatcher({
            type: 'GET_FILM_FULLDATA',
            url: `https://api.themoviedb.org/3/movie/${props.match.params.id}/reviews?api_key=${API_KEY}`,
            pointer: 'reviews',
        })
        return () => {
            dispatcher(setFilmDataClear({}))
        }
    }, [])

    return ( 
        <Wrapper>
            <PosterSection />
            <FilmContent />
        </Wrapper>
    )
}

export default FilmPage
