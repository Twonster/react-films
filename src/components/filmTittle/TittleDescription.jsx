import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
    margin: 0 0 15px 0;
`
const GenreList = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    margin: 0 5px;

    &:hover {
        text-decoration: underline;
    }
`
const Text = styled.span`
    margin: 0 5px;
`

const TittleDescription = () => {
    const { movie } = useSelector(({ filmDataReducer: { data } }) => data)
    const time = () => {
       const [hours, minutes] = (movie?.runtime / 60).toFixed(2).split('.')
       return `${hours}h ${minutes}m`
    }
    const genresList = () => (movie) ? movie.genres.map(item => <GenreList key={item.id} to={`/${item.id}`}>{item.name}</GenreList>) : '...loading'

    return (
        <Wrapper>
            <Text>{movie?.release_date}</Text>
            <div>{genresList()}</div>
            <Text>{time()}</Text>
        </Wrapper>
    )
}

export default TittleDescription
