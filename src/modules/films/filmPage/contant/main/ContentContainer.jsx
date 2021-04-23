import React from 'react'
import styled from 'styled-components'
import CastSection from './CastSection'

const Wrapper = styled.div`
    width: 900px;
`

const ContentContainer = () => {
    return (
        <Wrapper>
            <CastSection />
        </Wrapper>
    )
}

export default ContentContainer
