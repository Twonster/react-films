import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Word = styled(Link)`
    font-size: 14px;
    background-color: rgba(0,0,0,0.1);
    border: 1px solid #d7d7d7;
    color: #404040;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 5px 10px 0;
    text-decoration: none;
    transition: .3s;

    &:hover {
        cursor: pointer;
        opacity: .7;
    }
`

const Keyword = (props) => {
    return (
       <Word to="/">{props.name}</Word>
    )
}

export default Keyword
