import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import HumanCard from '../../../../../../components/cards/HumanCard'
import Preloader from '../../../../../../components/preloader/Preloader'
import ViewAllCard from '../../../../../../components/cards/ViewAllCard'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    min-height: 340px;
    padding: 0 0 15px 0;
`
const Cast = styled.h2`
    color: #000;
    margin: 0 0 20px 0;
`
const FullCast = styled(Cast)`
    margin: 20px 0;
    padding: 0 0 20px 0; 
    border-bottom: 1px solid rgba(0,0,0,0.24);
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
            <FullCast>Full cast & crew</FullCast>
        </>
    )
}

export default CastSection
