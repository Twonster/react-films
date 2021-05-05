import React from 'react'
import { DatePicker } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setReleaseValue } from '../../../redux/actions/filmActions/filtersDataActions';

const Wrapper = styled.div`
    margin: 0 0 10px 0;
    display: flex;

    & .text {
        width: 30%;
        opacity: 0.7;
    }
`

const PopUpCalendar = ({ type, text }) => {
    const dispatcer = useDispatch() 

    const onPanelChange = (mode, value) => {
        dispatcer(setReleaseValue(value, type))
    }

    return (
        <Wrapper>
            <span className="text">{text}</span>   
            <DatePicker onChange={onPanelChange} style={{ width: '70%' }}/>
        </Wrapper>
    )
}

export default PopUpCalendar
