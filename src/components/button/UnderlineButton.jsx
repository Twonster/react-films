import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.div`
    font-size: 18px;
    border: none;
    background-color: transparent;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 15px 0;
    margin: 0 30px 0 0;
    
    &::after {
        content: '';
        transition: .3s;
        width: ${props => props.active ? '100%' : '0%'};
        height: 3px;
        position: absolute;
        background-color: #404040;
        bottom: 10px;
        border-radius: 5px;
    }
    & span {
        transition: .3s;
        font-size: 12px;
        opacity: .7;
        margin: 0 0 0 10px;
        background: ${ props => props.active ? '#000' : 'transparent' };
        padding: ${ props => props.active ? '2px 6px' : 0 };
        border-radius: 10px;
        color: ${props => props.active ? '#fff' : '#000'};
    }
`
const UnderlineButton = ({ active, action, text, resultsCount }) => {
    return (
        <Button active={active} onClick={action}>{text}
            <span>{resultsCount}</span>
        </Button>
    )
}

export default UnderlineButton
