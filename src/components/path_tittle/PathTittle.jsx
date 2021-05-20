import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`
const Tittle = styled.h2`
    width: 100%;
    padding: 0 15px;
    font-size: 26px;
    margin: 0 0 8px 0;
`

const PathTittle = ({ text }) => {
    return (
        <Wrapper>
            <Tittle>{text}</Tittle>
        </Wrapper>
    )
}

export default PathTittle