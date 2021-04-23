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
    background-image: url(${props => props.closed ? '#fff' : props.bckgrnd});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;
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
    const { data: { movie }, loading } = useSelector(({ filmDataReducer }) => filmDataReducer )
    const [closed, isClosed] = useState(false)
    useEffect(() => {
        return () => isClosed(true)
    }, [])
    return ( 
        <Section loading={loading} closed={closed} bckgrnd={`${BACKDROP_SIZES.w1280}${movie?.backdrop_path}`}>
            <Blur>
                {loading 
                ? <Preloader />
                : <PosterContent>
                    <img className="poster" src={POSTER_SIZE.w342 + movie?.poster_path} alt="" />
                    <div className="description-wrapper">
                        <FilmTittle name={movie?.original_title} year={movie?.release_date} color="#fff" />
                        <TittleDescription />
                        <ActionSection votes={movie?.vote_average} />
                        <FilmDescription overview={movie?.overview} tagline={movie?.tagline} />
                        <CrewSection />
                    </div>
                </PosterContent>}
            </Blur>
        </Section>
    )
}

export default PosterSection
