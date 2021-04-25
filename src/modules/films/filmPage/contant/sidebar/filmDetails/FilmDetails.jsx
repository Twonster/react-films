import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);

`
const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
`
const Tittle = styled.span`
    font-size: 17px;
    font-weight: 700;
`
const Description = styled.span`
    font-size: 14px;
    opacity: .7;
`

const Detail = ({ tittle, description }) => {
    return (
        <DetailsWrapper>
            <Tittle>{tittle}</Tittle>
            <Description>{description}</Description>
        </DetailsWrapper>
    )
}

const FilmDetails = (props) => {
    const { movie } = useSelector(({ filmDataReducer: { response } }) => response)

    return (
        <Wrapper>
            {movie.data.status && <Detail tittle="Status" description={movie.data.status} />}
            {movie.data.original_language && <Detail tittle="Original Language" description={movie.data.original_language.toUpperCase()} />}
            {movie.data.budget != 0 && <Detail tittle="Budget" description={`$ ${movie.data.budget}`} />}
            {movie.data.revenue != 0 && <Detail tittle="Revenue" description={`$ ${movie.data.revenue}`} />}
        </Wrapper>
    )
}

export default FilmDetails
