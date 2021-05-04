import React from 'react'
import styled from 'styled-components'

import Keyword from '../keywords/Keyword'
import PopUpCalendar from './filtersItems/Calendar'
import KeywordsSearch from './filtersItems/KeywordsSearch'
import Slide from './filtersItems/Slider'

const Wrapper = styled.div`
    border-top: 1px solid #0000001f;

    & .genres {
        display: flex;
        flex-wrap: wrap;
    }
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
                <div className="genres">
                    <Keyword name="Action" value="28"/>
                    <Keyword name="Adventure" value="12"/>
                    <Keyword name="Animation" value="16"/>
                    <Keyword name="Comedy" value="35"/>
                    <Keyword name="Crime" value="80"/>
                    <Keyword name="Documentary" value="99"/>
                    <Keyword name="Drama" value="18"/>
                    <Keyword name="Family" value="10751"/>
                    <Keyword name="Fantasy" value="14"/>
                    <Keyword name="History" value="36"/>
                    <Keyword name="Horror" value="27"/>
                    <Keyword name="Music" value="10402"/>
                    <Keyword name="Mystery" value="9648"/>
                    <Keyword name="Romance" value="10749"/>
                    <Keyword name="Science Fiction" value="878"/>
                    <Keyword name="TV Movie" value="10770"/>
                    <Keyword name="Thriller" value="53"/>
                    <Keyword name="War" value="10752"/>
                    <Keyword name="Western" value="37"/>
                </div>
            </Wrapper>
            <Wrapper>
                <Tittle>Release Dates</Tittle>
                <PopUpCalendar text="From" />
                <PopUpCalendar text="To" />
            </Wrapper>
            <Wrapper>
                <Tittle>User Score</Tittle>
                <Slide dots={true} type="range" min={0} max={10} />
            </Wrapper>
            <Wrapper>
                <Tittle>Minimum User Votes</Tittle>
                <Slide dots={false} min={0} max={500} />
            </Wrapper>
            <Wrapper>
                <Tittle>Runtime</Tittle>
                <Slide dots={false} type="range" min={0} max={400}/>
            </Wrapper>
            <Wrapper>
                <Tittle>Keywords</Tittle>
                <KeywordsSearch />
            </Wrapper>
        </>
    )
}


export default FilterContent
