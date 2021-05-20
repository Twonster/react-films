import React from 'react'
import styled from 'styled-components'
import ContentContainer from './main/ContentContainer'
import FilmSidebar from './sidebar/FilmSidebar'

const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    padding: 0 15px;
`

const FilmContent = () => {
    return (
        <Wrapper>
            <ContentContainer />
            <FilmSidebar />
        </Wrapper>
    )
}

export default FilmContent
