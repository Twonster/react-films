import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setUserScoreValue, setUserVotesValue, setRuntimeRange } from '../../redux/actions/filmActions/filtersDataActions'
import Slide from './filtersItems/Slider'
const Wrapper = styled.div`
    border-top: 1px solid #0000001f;
`
const Tittle = styled.p`
    padding: 7px 0 0 0;
    opacity: .8;
`

const SlidersSection = () => {
    return (
        <>
            <Wrapper>
                <Tittle>User Score</Tittle>
                <Slide action={setUserScoreValue} dots={true} type="range" min={0} max={10} />
            </Wrapper>
            <Wrapper>
                <Tittle>Minimum User Votes</Tittle>
                <Slide action={setUserVotesValue} dots={false} min={0} max={500} />
            </Wrapper>
            <Wrapper>
                <Tittle>Runtime</Tittle>
                <Slide action={setRuntimeRange} dots={false} type="range" min={0} max={400}/>
            </Wrapper>
        </>
    )
}
export default SlidersSection