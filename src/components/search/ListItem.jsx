import React from 'react'
import styled from 'styled-components'

import loupe from '../../images/icons/magnifying-glass-ico.svg'

const Wrapper = styled.div`
    display: block;
    background-color: #fff;
    border-bottom: 1px solid #00000038;
    color: #6f6f6f;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background-color: hsla(0, 0%, 0%, 0.05);
    }
`
const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    background-image: url(${loupe});
    background-position: left;
    background-repeat: no-repeat;
    background-size: 12px;
`
const Text = styled.p`
    padding: 5px 0 5px 20px;
    margin: 0;
    width: 100%;
`
const ListItem = ({ id, filmName, history, hiding }) => {
    return (
        <Wrapper 
            onClick={
                () => {
                hiding()
                history.push(`/films/film-id/${id}`)
            }
        }>
            <Container>
                <Text>{filmName}</Text>
            </Container>
        </Wrapper>
    )
}

export default ListItem
