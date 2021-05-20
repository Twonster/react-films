import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import ActionSection from '../../../../components/filmTittle/ActionSection'
import CrewSection from '../../../../components/filmTittle/CrewSection'
import FilmDescription from '../../../../components/filmTittle/FilmDescription'

import FilmTittle from '../../../../components/filmTittle/FilmTittle'
import TittleDescription from '../../../../components/filmTittle/TittleDescription'
import Preloader from '../../../../components/preloader/Preloader'
import { BACKDROP_SIZES, POSTER_SIZE } from '../../../../constants/APIConfig'
import { showing } from '../../../../animations'

const Section = styled.div`
    display: flex;
    background-image: url(${props => props.closed ? '#fff' : props.bckgrnd});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;
    margin: 0 0 20px 0;
`
const Blur = styled.div`
    width: 100%;
    height: 100%;
    min-height: 600px;
    background-color: rgba(0, 0, 9, 0.7);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;

`
const PosterContent = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 1200px;
    padding: 50px 15px;
    animation: ${showing} 1s linear ;

    & .poster {
        height: 500px;
        border-radius: 10px;
        align-self: flex-start;
    }

    & .description-wrapper {
        margin: 0 0 0 30px;
        align-self: stretch;
    }
`

const PosterSection = (props) => {
    const { movie } = useSelector(({ filmDataReducer: { response } }) => response)
    
    const [closed, isClosed] = useState(false)
    useEffect(() => {
        return () => isClosed(true)
    }, [])

    return (
        <Section loading={movie.loading} closed={closed} bckgrnd={`${BACKDROP_SIZES.w1280}${movie.data?.backdrop_path}`}>
            <Blur>
                {movie.loading
                ? <Preloader />
                : <PosterContent>
                    <img className="poster" src={POSTER_SIZE.w342 + movie.data?.poster_path} alt="" />
                    <div className="description-wrapper">
                        <FilmTittle name={movie.data?.original_title} year={movie.data?.release_date} color="#fff" />
                        <TittleDescription />
                        <ActionSection filmId={movie.data.id} votes={movie.data?.vote_average} />
                        <FilmDescription overview={movie.data?.overview} tagline={movie.data?.tagline} />
                        <CrewSection />
                    </div>
                </PosterContent>}
            </Blur>
        </Section>
    )
}

export default PosterSection
