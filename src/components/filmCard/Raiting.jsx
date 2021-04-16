import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
    position: absolute;
    width: 50px;
    height: 50px; 
    top: -30px;   
`
const Line = styled.circle`
    transform-origin: center;
    transform: rotate(-90deg);
    stroke: #50a3ff;
    stroke-width: 8px;
    fill: #fff;
    font-size: small;
    r: 20px;
    cx: 25;
    cy: 25;
    stroke-dasharray: ${props => `${props.dasharray} ${props.dasharray}`};
    stroke-dashoffset: ${props => props.dashoffset};
`   
const Text = styled.text`
    fill: #000;
    font-weight: 700;
    transform: translate(13px, 30px);
    font-size: small;
` 
const Persents = styled.text`
        fill: #000;
    font-weight: 700;
    transform: translate(29px,30px);
    font-size: x-small;
`
const Raiting = (props) => {
    const borderRefence = 2 * Math.PI * 20
    const vote = Math.floor(props.votes * 10)
    
    const setProgress = (percent) => {
        return borderRefence - percent / 100 * borderRefence
    }
    return (
        <Wrapper>
            <Line dasharray={borderRefence} dashoffset={setProgress(vote)} />
            <Text>{vote}</Text>
            <Persents>%</Persents>
        </Wrapper>
    )
}

export default Raiting