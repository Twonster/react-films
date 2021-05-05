import React from 'react'
import styled from 'styled-components'

import PopUpCalendar from './filtersItems/Calendar'
import KeywordsSearch from './filtersItems/KeywordsSearch'
import GenresList from './Genres'
import SlidersSection from './SlidersSection'


const Wrapper = styled.div`
    border-top: 1px solid #0000001f;
`
const Tittle = styled.p`
    padding: 7px 0 0 0;
    opacity: .8;
`

const FilterContent = (props) => {
    return (
        <>
            <Wrapper>
                <Tittle>Genres</Tittle>
                <GenresList />
            </Wrapper>
            <Wrapper>
                <Tittle>Release Dates</Tittle>
                <PopUpCalendar type="from" text="From" />
                <PopUpCalendar type="to" text="To" />
            </Wrapper>
            <SlidersSection />
            <Wrapper>
                <Tittle>Keywords</Tittle>
                <KeywordsSearch />
            </Wrapper>
        </>
    )
}


export default FilterContent
