import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { API_KEY } from '../../../constants/APIConfig'

import { setFilmDataClear } from '../../../redux/store/actions/filmActions/mainFilmDataAction'
import { allFilmDataRequest } from '../../../redux/store/actions/thuncActions'
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
    const callApi = async () => {
        const requests = {
            movie: `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}`,
            cast: `https://api.themoviedb.org/3/movie/${props.match.params.id}/credits?api_key=${API_KEY}`
        }
        await dispatcher(allFilmDataRequest(requests.movie, 'movie'))
        await dispatcher(allFilmDataRequest(requests.cast, 'people'))
    }

    useEffect(() => {
        callApi()
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
