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
        width: ${props => props.active ? '70%' : '0%'};
        height: 3px;
        position: absolute;
        background-color: #404040;
        bottom: 10px;
        border-radius: 5px;
    }
`
const UnderlineButton = ({ active, action, text }) => {
    return (
        <Button active={active} onClick={action}>{text}</Button>
    )
}

export default UnderlineButton
