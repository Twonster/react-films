import React from 'react'
import styled from 'styled-components'
import avatar from '../../images/avatarNotFound.png'
const Wrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-image: ${props =>  props.image ? `url(${props.image})` : `url(${avatar})`};
    background-position: center;
    background-size: contain;
    background-color: #666666;
    cursor: pointer;
`

const Avatar = (props) => {
    return (
        <Wrapper image={props.image} />
    )
}

export default Avatar
