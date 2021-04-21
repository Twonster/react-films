import React from 'react'
import styled from 'styled-components'

const SButton = styled.button`
    height: 100%;
    border: none;
    background-color: #25558a;
    color: #fff;
    font-weight: 900;
`

const HeaderButton = () => {
    return (
        <SButton>Search</SButton>
    )
}

export default HeaderButton
