import React from 'react'
import styled, { keyframes } from 'styled-components'
import { showing } from '../../animations'


const rotate = keyframes`
    from { transform: rotate(0deg);  }
    to { transform: rotate(360deg) }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-self: center;
`

const Wrapper = styled.svg`
    position: ${props => props.position};
    width: 50px;
    height: 50px; 
    top: -30px;   
    cursor: pointer;
    transform: scale(${props => props.scale ? props.scale : 1});
    animation: ${rotate} .8s linear infinite, ${showing} 1s linear;

    &:hover .outline {
        stroke-width: 10px;
    }
`
const Line = styled.circle`
    transition: .3s;
    transform-origin: center;
    transform: rotate(-90deg);
    stroke: #50a3ff;
    stroke-width: 8px;
    fill: transparent;
    font-size: small;
    r: 20px;
    cx: 25;
    cy: 25;
    stroke-dasharray: ${props => `${props.dasharray} ${props.dasharray}`};
    stroke-dashoffset: ${props => props.dashoffset};

`   

const Preloader = (props) => {
    const borderRefence = 2 * Math.PI * 20
    const setProgress = (percent) => {
        return borderRefence - percent / 100 * borderRefence
    }
    return (
        <Container>
            <Wrapper position={props.position} scale={props.scale}>
                <Line className="outline" dasharray={borderRefence} dashoffset={setProgress(75)} />
            </Wrapper>
        </Container>
    )
}

export default Preloader
