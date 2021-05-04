import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { setSearchShowingStatus } from '../../redux/actions/searchActions/searchActions'

import Link from '../../components/link/Link'
import SearchLoupeButton from '../../components/search/SearchLoupeButton'
import logo from  '../../images/logo.svg'
import SearchSection from '../search/SearchSection'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    background-color: #1890ff;
    box-shadow: 0 0 20px 0 #00000094;
    width: 100%;
    position: relative;
    z-index: 10;
    
    & .logo-wrapper {
        display: flex;
        align-items: center;
        font-weight: 700;
        text-decoration: none;
        color: #fff;
    }

    & .logo {
        width: 50px;
        margin: 0 10px 0 0;
    }

    & .right-side {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 80%;
        height: 70px;
    }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`
const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Header = ({ history }) => {
    const dispatcher = useDispatch()
    const { isOpened } = useSelector(({ searchDataReducer: { response } }) => response)

    // const  [cearchVisible, setShowVisible] = useState(false)
    const searchHandler = () => {
        dispatcher(setSearchShowingStatus(!isOpened))
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <NavLink to="/" className="logo-wrapper">
                        <img className="logo" src={logo} alt=""/>
                        DVABOBA   
                    </NavLink>

                    <div className="right-side">
                        <LinksWrapper>
                            <Link text="favorites" href="/favorites"/>
                            <Link text="films" href="/films"/>
                            <Link text="home" href="/home"/>
                            <SearchLoupeButton 
                                type={isOpened}
                                action={searchHandler}
                            />
                        </LinksWrapper>
                    </div>
                </Container>
            </Wrapper>
            {isOpened && <SearchSection hiding={searchHandler} history={history} />}
        </>
    )
}

export default Header
