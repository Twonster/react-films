import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Keyword from '../../../../../../components/keywords/Keyword'
import Preloader from '../../../../../../components/preloader/Preloader'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Tittle = styled.span`
    font-size: 17px;
    font-weight: 700;
    margin: 20px 0 10px 0;
`
const WordsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
`

const KeywordsSection = (props) => {
    const { keywords } = useSelector(({ filmDataReducer: { response } }) => response)
    const spawnWords = () => {
        return keywords.data.keywords ? keywords.data.keywords.map(({ id, name }) => <Keyword key={id} name={name} />) : ''
    }
    return (
        <Wrapper>
            <Tittle>Keywords</Tittle>
            <WordsContainer>
                {keywords.data.keywords 
                ? spawnWords()
                : <Preloader />}
            </WordsContainer>
        </Wrapper>
    )
}

export default KeywordsSection
