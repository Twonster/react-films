import React, { useState } from 'react'
import { useSelector, useStore } from 'react-redux'
import styled from 'styled-components'

import ActionSection from '../../../components/filmTittle/ActionSection'
import CrewSection from '../../../components/filmTittle/CrewSection'
import FilmDescription from '../../../components/filmTittle/FilmDescription'

import FilmTittle from '../../../components/filmTittle/FilmTittle'
import TittleDescription from '../../../components/filmTittle/TittleDescription'
import { BACKDROP_SIZES, POSTER_SIZE } from '../../../constants/APIConfig'

const Section = styled.div`
    background-image: url(${props => props.bckgrnd});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
`
const Blur = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 9, 0.7);
    backdrop-filter: blur(3px);

`
const PosterContent = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 1200px;
    padding: 50px 0;

    & .poster {
        height: 500px;
        border-radius: 10px;
        align-self: flex-start;
    }

    & .description-wrapper {
        margin: 0 0 0 20px;
        align-self: stretch;
    }

`

const PosterSection = (props) => {
    const { data: { movie }, loading } = useSelector(({ filmReducer }) => filmReducer )

    return ( 
        <Section bckgrnd={`${BACKDROP_SIZES.w1280}${movie?.backdrop_path}`}>
            <Blur>
                <PosterContent>
                    <img className="poster" src={POSTER_SIZE.w342 + movie?.poster_path} alt="" />
                    <div className="description-wrapper">
                        <FilmTittle name={movie?.original_title} year={movie?.release_date} color="#fff" />
                        <TittleDescription />
                        <ActionSection votes={movie?.vote_average} />
                        <FilmDescription overview={movie?.overview} tagline={movie?.tagline} />
                        <CrewSection />
                    </div>
                </PosterContent>
            </Blur>
        </Section>
    )
}

export default PosterSection
