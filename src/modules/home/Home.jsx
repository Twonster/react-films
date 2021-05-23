import React from 'react'
import styled from 'styled-components'

import PathTittle from '../../components/path_tittle/PathTittle'

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
    
    return (
        <Container>
            <PathTittle text="Favorites" />
            <Wrapper>

            </Wrapper>
        </Container>
    )
}

export default Home