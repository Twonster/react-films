import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    color: ${props => props.color || '#000'};
    margin: 0 0 10px 0;
`
const Tittle = styled.h2`
    margin: 0;
    color: ${props => props.color || '#000'};
`
const Year = styled.span`
    margin: 0 0 0 7px;
    font-size: 18px;
    opacity: .7;
`

const FilmTittle = ({ name, year, color }) => {

    const releaseYear = () => {
        return year.split('-')[0]
    }

    return (
        <Wrapper color={color}>
            <Tittle color={color} >{name}</Tittle>
            {(year) ? <Year>({releaseYear()})</Year> : ''}
        </Wrapper>
    )
}

export default FilmTittle
