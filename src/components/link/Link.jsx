import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.span`
    position: relative;
    margin: 0 10px;

    & .active {
        color: #fff;

        &::after {
            width: 70%;
        }
    }
`
const StyledNavLink = styled(NavLink)`
    transition: .3s;
    color: #25558a;
    text-decoration: none;
    text-transform: ${props => props.textTransform || 'uppercase'};
    font-weight: ${props => props.fontWeight || 700};
    display: inline-flex;
    justify-content: center;

    &::after {
        transition: .3s;
        content: '';
        width: 0;
        height: 3px;
        position: absolute;
        background-color: #fff;
        bottom: -5px;
        border-radius: 5px;
    }
`

const Link = (props) => {
    return (
        <Wrapper>
            <StyledNavLink to={props.href} activeClassName="active">{props.text}</StyledNavLink>
        </Wrapper>
    )
} 

export default Link
