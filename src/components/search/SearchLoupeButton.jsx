import React from 'react'
import styled from 'styled-components'

import loupe from '../../images/icons/loupe-ico.png'

const Button = styled.button`
    background-image: ${props => props.toggler ? 'none' : `url(${loupe})`  };
    background-color: ${props => props.toggler ? '#fff' : 'transparent' };
    background-position: center;
    background-size: 15px;
    border: none;
    background-repeat: no-repeat;
    transition: .2s;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 0 0 0 15px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: ${props => props.toggler ? '70%' : '0%'};
        height: 3px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: #1890ff;
        transition: width .2s;
    }

    &::before {
        content: '';
        position: absolute;
        width: ${props => props.toggler ? '70%' : '0%'};
        height: 3px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        background-color: #1890ff;
        transition: width .2s;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
    &:hover::before {
        background-color: rgb(255, 255, 255);
    }
    &:hover::after {
        background-color: rgb(255, 255, 255);
    }
`

const SearchLoupeButton = ({ type, action }) => {
    return (
        <Button 
            onClick={action}
            toggler={type}
        />
    )
}

export default SearchLoupeButton 
