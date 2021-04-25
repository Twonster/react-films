import React from 'react'
import styled from 'styled-components'
import Avatar from '../../../../../../components/avatars/Avatar'
import { PROFILE_SIZES } from '../../../../../../constants/APIConfig'


const Wrapper = styled.div`
    display: flex;
    padding: 20px 0;
    border-radius: 8px;

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
    }
`

const ReviewCard = ({  author_details, content, created_at }) => {
    const image = author_details.avatar_path ? `${PROFILE_SIZES.w45}${author_details.avatar_path}` : false
    console.log(image)
    return (
        <Wrapper> 
            <div className="avatar-setion">
                <Avatar image={image} />
            </div>
            <div className="review-section">
                <div className="user-data">
                    <div className="text">
                        <span className="user-name">A review by {author_details.name}</span>
                        <span className="post-time">Written by sykobanana on {created_at}</span>
                    </div>
                    <div className="post-rating">7*</div>
                </div>
                <p className="review-text">{content}</p>
            </div>
        </Wrapper>
    )
}

export default ReviewCard
