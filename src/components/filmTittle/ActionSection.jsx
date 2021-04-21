import React from 'react'
import styled from 'styled-components'

import Raiting from '../raiting/Raiting'

const Wrapper = styled.div`
    display: flex;  
    align-items: center;
    margin: 20px 0;
`
const ScoreText = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 0 10px;
`
const ActionSection = (props) => {
    return (
        <Wrapper>
            <Raiting position="static" votes={props.votes} scale="1.2"/>
            <ScoreText>User<br></br>Score</ScoreText>
        </Wrapper>
    )
}

export default ActionSection
