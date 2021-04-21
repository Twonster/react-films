import React from 'react'
import styled from 'styled-components'

const Phrase = styled.p`
    margin: 0 0 10px 0; 
    font-style: italic;
    opacity: .6;   
`
const Overview = styled.p`
    margin: 0 0 10px 0;
    font-weight: 700;
    font-size: 20px;
`
const Text = styled.p`
    margin: 0 0 10px 0;    
    font-size: 14px; 
    margin: 0 0 20px 0;   
`

const FilmDescription = ({ tagline, overview }) => {
    return (
        <>
            <Phrase>{tagline}</Phrase>
            <Overview>Overview</Overview>
            <Text>{overview}</Text>
        </>
    )
}

export default FilmDescription
