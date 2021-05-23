import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import star_active from '../../images/icons/star-active.svg'
import star_disabled from '../../images/icons/star-disabled.svg'
import { TOGGLE_USER_DATA } from '../../redux/actions/sagaActionTypes'


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
    const { favorite_films } = useSelector( ({ userAuthDataReducer: { user_data } }) => user_data )

    const dispatcher = useDispatch()
    const [position, size] = styles
    const item = filmId && favorite_films.includes(filmId.toString())

    const [isLiked, setIsLiked] = useState(false)
    
    useEffect(() => {
        const checkStorage = () => {
            item ? setIsLiked(true) : setIsLiked(false)
        }
        checkStorage()
    }, [])

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Autorisation': localStorage.getItem('token')
        }
    }

    const checkFavorites = () => {
        dispatcher({
            type: TOGGLE_USER_DATA,
            url: `http://localhost:8080/api/auth/favorites/${filmId}`,
            options
        })
    }

    const clickHandler = () => {
        if (item) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
        checkFavorites()
    }
    return (
        <Wrapper 
            position={position} 
            size={size} 
            button_type={isLiked} 
            onClick={clickHandler}
        />
    )
}

export default LikeButton
