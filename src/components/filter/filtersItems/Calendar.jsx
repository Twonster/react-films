import React, { useState } from 'react'
import { Calendar, DatePicker, Input } from 'antd';
import styled from 'styled-components';

function onPanelChange(value, mode) {
  console.log(value, mode);
}
const Wrapper = styled.div`
    margin: 0 0 10px 0;
    display: flex;

    & .text {
        width: 30%;
        opacity: 0.7;
    }
`

const PopUpCalendar = (props) => {

    return (
        <Wrapper>
            <span className="text">{props.text}</span>   
            <DatePicker style={{ width: '70%' }}/>
        </Wrapper>
    )
}

export default PopUpCalendar
