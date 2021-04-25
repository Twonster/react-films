import React from 'react'
import styled from 'styled-components'

const SocialLink = styled.div`
    display: inline-block;
    background-image: url(${props => props.ico});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 25px 0 0;
    transition: .3s;

    &:hover {
        opacity: .7;
    }

    & a {
        display: block;
        width: 25px;
        height: 25px;
    }
`

const SocialIcon = ({ link, id, ico }) => {
    return (
        <SocialLink ico={ico}>
            <a target="_blank" href={`${link ? link : ''}${id}`} ></a>       
        </SocialLink>
    )
}

export default SocialIcon
