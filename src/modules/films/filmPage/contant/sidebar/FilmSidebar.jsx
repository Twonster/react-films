import React from 'react'
import styled from 'styled-components'
import FilmDetails from './filmDetails/FilmDetails'
import KeywordsSection from './keywords/KeywordsSection'
import SocialLinks from './socoalLinks/SocialLinks'

const Wrapper = styled.div`
    color: #404040;
    max-width: 250px;
    min-width: 180px;
    display: flex;
    flex-direction: column;
`

const FilmSidebar = () => {

    return (
        <Wrapper>
            <SocialLinks />
            <FilmDetails />
            <KeywordsSection />
        </Wrapper>
    )
}

export default FilmSidebar
