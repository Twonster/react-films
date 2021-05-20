import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import star_active from '../../images/icons/star-active.svg'
import star_disabled from '../../images/icons/star-disabled.svg'

const Wrapper = styled.div`
    background-image: url(${props => props.button_type ? star_active : star_disabled});
    background-position: center;
    background-size: ${props => props.size};
    background-repeat: no-repeat;
    position: ${props => props.position};
    width: ${props => props.size};
    height: ${props => props.size};
    top: 3%;
    right: 5%;
    cursor: pointer;
    transition: .3s;

    &:hover {
        transform: scale(1.1)
    }
`

const LikeButton = ({ filmId, styles }) => {
    const [position, size] = styles

    const [isLiked, setIsLiked] = useState(false)
    const item = localStorage.getItem(`film_id_${filmId}`)
    
    useEffect(() => {
        const checkLocalStorage = () => {
            item ? setIsLiked(true) : setIsLiked(false)
        }
        checkLocalStorage(filmId)
    }, [])

    const clickHandler = () => {
        if (item) {
            localStorage.removeItem(`film_id_${filmId}`)
            setIsLiked(false)
        } else {
            localStorage.setItem(`film_id_${filmId}`, filmId)
            setIsLiked(true)
        }
    }
    return <Wrapper position={position} size={size} button_type={isLiked} onClick={clickHandler}/>
}

export default LikeButton
