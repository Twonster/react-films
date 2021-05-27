import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import UserInfo from './user-info/UserInfo'

const Container = styled.div`
    overflow-y: scroll;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`
const Home = (props) => {
    const { user_data } = useSelector(({ userAuthDataReducer: { user_data } }) => ({ user_data }))
    const { 
        user_email,
        user_name,
        user_lastname,
        user_nickname,
        user_id,
        favorite_films
    } = user_data

    return (
        <Container>
            <UserInfo
                email={user_email}
                name={user_name}
                lastname={user_lastname}
                nickname={user_nickname}
                userId={user_id}
            />
            <Wrapper>

            </Wrapper>
        </Container>
    )
}

export default Home
