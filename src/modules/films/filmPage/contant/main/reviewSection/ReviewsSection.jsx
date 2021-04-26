import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import UnderlineButton from '../../../../../../components/button/UnderlineButton'
import Preloader from '../../../../../../components/preloader/Preloader'
import ReviewCard from './ReivewCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    & .pagination {
        display: flex;
        justify-content: space-between;

        & .button-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;

            & .page-number {
                margin: 0 10px;
            }

            & .page-button {
                color: #fff;
                background-color: #000;
                border-radius: 20px;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                opacity: 0.7;
                margin: 0 10px;
                transition: .3s;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    
    & .social-tittle {
        font-size: 18px;
        font-weight: 700;
        padding: 0 0 15px 0;
        margin: 0 40px 0 0;
    }

    & .links-container {
        display: flex;
    }
` 
const CardWrapper = styled.div`

`

const ReviewsSection = (props) => {
    const { reviews } = useSelector(({ filmDataReducer: { response } }) => response )
    const [currentLink, setCurrentLink] = useState([true, false])
    const [currentPost, setCurrentPost] = useState(0)

    const swapLinks = (value) => {
        setCurrentLink(value)
    }

    const swapPosts = (action) => {
        if (action === -1) {
            setCurrentPost(currentPost)
            return;
        }
        if (action > reviews.data.results.length - 1) {
            setCurrentPost(currentPost)
            return;
        }
        setCurrentPost(action)
    }

    const spawnCards = () => {
        return reviews.data.results ? reviews.data.results.map((item, index) => <ReviewCard key={index} {...item} />) : <Preloader />
    }
    const postsList = spawnCards()
    return (
        <>
            { reviews.data.results
                ?   <Container>
                        <div className="pagination">
                            <div className="links-container">
                                <div className="social-tittle">Social</div>
                                <UnderlineButton active={currentLink[0]} action={() => swapLinks([true, false])} text="Reviews" />
                                <UnderlineButton active={currentLink[1]} action={() => swapLinks([false, true])} text="Discussions" />
                            </div>
                            <div className="button-container">
                                <button className="page-button" onClick={() => swapPosts(currentPost - 1)}>{'< prev'}</button>
                                <span className="page-number">{currentPost + 1}</span>
                                <button className="page-button" onClick={() => swapPosts(currentPost + 1)}>{'next >'}</button>
                            </div>
                        </div>
                        <CardWrapper>
                            {postsList[currentPost]}
                        </CardWrapper>
                    </Container>
                :   <Preloader />
            }
        
        </>
    )
}

export default ReviewsSection
