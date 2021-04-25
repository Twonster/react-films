import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { showing } from '../../animations'

export const Wrapper = styled.div` 
    display: inline-flex;
    width: 20%;
    flex-shrink: 0;
    animation: ${showing} 1s linear;
`
export const Card = styled.div`
    margin: 5px;
    box-shadow: 0 6px 10px 0px #0000002e;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    
    & .imgWrapper {

    }
`
export const Image = styled.img`
    width: 100%;
`
export const Description = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    `
export const SecondHeading = styled.span`
    color: #000;
    font-size: 11px;
    opacity: .7;
`    
export const ThirdHeading = styled.span``    
export const Tittle = styled(NavLink)`
    color: #404040;
    transition: .2s;
    cursor: pointer;
    margin: 10px 0 0 0;
    font-weight: 700;
    text-decoration: none;
    display: flex;
    align-items: center;
    
    &:hover {
        color: #50a3ff;
    }
`