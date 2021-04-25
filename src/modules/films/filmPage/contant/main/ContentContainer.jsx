import React from 'react'
import styled from 'styled-components'
import CastSection from './castSection/CastSection'
import ReviewsSection from './reviewSection/ReviewsSection'

const Wrapper = styled.div`
    padding: 0 20px 0 0;
    color: #404040;
    overflow: hidden;
`

const ContentContainer = () => {
    return (
        <Wrapper>
            <CastSection />
            <ReviewsSection />
        </Wrapper>
    )
}

export default ContentContainer
