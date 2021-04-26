import { format } from 'date-fns'
import React, { useState } from 'react'
import styled from 'styled-components'

import Avatar from '../../../../../../components/avatars/Avatar'
import { PROFILE_SIZES } from '../../../../../../constants/APIConfig'

import star from '../../../../../../images/icons/star-ico.png'

const Wrapper = styled.div`
    display: flex;
    padding: 20px 0;
    border-radius: 8px;
    width: 100%;

    & .avatar-setion {
        margin: 0 20px 0 0;
    }

    & .user-data {
        display: flex;
        
        & .text {
            display: flex;
            flex-direction: column;

            & .user-name {
                font-size: 18px;
                font-weight: 700;
            }
        }

        & .post-rating {
            background-color: #000;
            align-self: flex-start;
            padding: 2px 10px;
            color: #fff;
            display: flex;
            align-items: center;
            font-weight: 700;
            border-radius: 20px;
            margin: 0 0 0 10px;

            & img {
                margin: 2px 0 0 2px;
                width: 12px;
            }
        }
    }

    & .review-section {
        width: 100%;

        & .review-text {
            display: inline-flex;
            width:initial;
            flex-shrink: 0;
            transition: .3s;
            
            & .view-more-button {
                border: none;
                background-color: transparent;
                cursor: pointer;
                transition: .3s;
                opacity: .5;

                &:hover {
                    opacity: 1;
                }
            }
        }

    }

`
const ReviewCard = ({  author_details, content, created_at }) => {
    const [isOpen, setIsOpen] = useState(false)

    const image = author_details.avatar_path ? `${PROFILE_SIZES.w45}${author_details.avatar_path}` : false
    const postDate = format(new Date(created_at), 'PPpp')

    const show_hide_description = () => {
        setIsOpen(!isOpen)
    }

    const previewText = (data) => {
        const wordsArr = data.split(' ')
        if (wordsArr.length < 50) {
            return <p>{wordsArr.join(' ')}</p>
        } else {
            return (
                <p>
                    {wordsArr.slice(0, 50).join(' ') + '...'}                    
                    <button onClick={show_hide_description} className="view-more-button">view more</button>
                </p>
            )
        }
    }

    return (
        <Wrapper> 
            <div className="avatar-setion">
                <Avatar image={image} />
            </div>
            <div className="review-section">
                <div className="user-data">
                    <div className="text">
                        <span className="user-name">A review by {author_details.name || author_details.username}</span>
                        <span className="post-time">Written by <span className="username">{author_details.username}</span> on <span className="date">{postDate}</span></span>
                    </div>
                    {author_details.rating && <div className="post-rating">{author_details.rating} <img src={star} alt=""/></div>}
                </div>
                <div className="review-text">
                    {isOpen ? <p>{content}</p> : previewText(content)}
                </div>
            </div>
        </Wrapper>
    )
}

export default ReviewCard
