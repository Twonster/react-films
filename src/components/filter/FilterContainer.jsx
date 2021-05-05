import React from 'react'
import styled from 'styled-components'

import arrow from '../../images/icons/arrow-ico.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 0 10px 0;
    padding: 15px 10px;

    & .tittle {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const Text = styled.h3`
    margin: 0;
`
const Arrow = styled.div`
    background-image: url(${arrow});
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(${props => props.showType ? '90deg' : '0deg'});
    width: 30px;
    height: 30px;
    transition: .2s;
`
const FilterContainer = ({ showType, toggleAction, text, content, type }) => {

    return (
        <Wrapper>
            <div onClick={() => toggleAction(type)} className="tittle">
                <Text>{text}</Text>
                <Arrow showType={showType}></Arrow>
            </div>
            {showType && content}
        </Wrapper>
    )
}

export default FilterContainer
