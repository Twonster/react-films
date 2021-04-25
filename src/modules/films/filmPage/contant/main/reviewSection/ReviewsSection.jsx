import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Avatar from '../../../../../../components/avatars/Avatar'
import UnderlineButton from '../../../../../../components/button/UnderlineButton'
import Preloader from '../../../../../../components/preloader/Preloader'
import ReviewCard from './ReivewCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    & .pagination {
        display: flex;
        justify-content: space-between;
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

    const swapLinks = (value) => {
        setCurrentLink(value)
    }

    const spawnCards = () => {
        return reviews.data.results ? reviews.data.results.map((item, index) => <ReviewCard key={index} {...item} />) : <Preloader />
    }

    return (
        <Container>
            <div className="pagination">
                <div className="links-container">
                    <div className="social-tittle">Social</div>
                    <UnderlineButton active={currentLink[0]} action={() => swapLinks([true, false])} text="Reviews" />
                    <UnderlineButton active={currentLink[1]} action={() => swapLinks([false, true])} text="Discussions" />
                </div>
                <div className="button-container">
                    <button>{' <- '}</button>
                    <button>{' -> '}</button>
                </div>
            </div>
            <CardWrapper>
                {spawnCards()}
            </CardWrapper>
        </Container>
    )
}

export default ReviewsSection
