import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import HumanCard from '../../../../../components/cards/HumanCard'
import Preloader from '../../../../../components/preloader/Preloader'
import ViewAllCard from '../../../../../components/cards/ViewAllCard'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    min-height: 340px;
`
const Cast = styled.h2`
    color: #000;
`

const CastSection = (props) => {
    const { peoples } = useSelector(({ filmDataReducer: { response } }) => response)

    const castList = () => {
       return (peoples.data.cast) 
       ? peoples.data.cast.slice(0, 10).map(item => <HumanCard key={item.id} {...item} />)
       : <Preloader /> 
    }  

    return (
        <>
            <Cast>Top casts</Cast>
            <Wrapper>
                {castList()}
                <ViewAllCard href="/"/>
            </Wrapper>
        </>
    )
}

export default CastSection
