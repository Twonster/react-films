import React from 'react'
import styled from 'styled-components'
import { showing } from '../../../../../animations'
import CastSection from './castSection/CastSection'
import ReviewsSection from './reviewSection/ReviewsSection'

const Wrapper = styled.div`
    padding: 0 20px 0 0;
    color: #404040;
    overflow: hidden;
    width: 100%;
    animation: ${showing} 1s linear;
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
