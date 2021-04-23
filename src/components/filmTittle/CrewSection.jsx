import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    margin: 0 0 10px 0;

    &:last-child {
        background-color: #ffffff2b;
        margin: 0 0 10px 0;
        font-size: 14px;
        width: auto;
        padding: 10px;
        border-radius: 8px;
    }
`
const Name = styled(Link)`
    font-weight: 700;
    color: #fff;
    text-decoration: none;

    &:hover {
        opacity: .7;
    }
`
const Job = styled.span`
    font-size: 12px;
`

const Card = (props) => {
    return (
        <CardWrapper>
            <Name>{props.name}</Name>
            <Job>{props.job}</Job>
        </CardWrapper>
    )
}

const CrewSection = (props) => {
    const { people } = useSelector(({ filmDataReducer: { data } }) => data)
    const crewList = () => (people && people.crew.length) ? people.crew.slice(0, 10).map(item => <Card key={item.id} link={`/${item.id}`} name={item.name} job={item.known_for_department} />) : '...loading'

    return (
        <Wrapper>
            {crewList()}
            <Card name="View All"/>
        </Wrapper>
    )
}

export default CrewSection
