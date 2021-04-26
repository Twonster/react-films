import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Link from '../../components/link/Link'
import logo from  '../../images/logo.svg'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-image: linear-gradient(9deg, #90cea1, #50a3ff);
    box-shadow: 0 0 20px 0 #00000094;
    width: 100%;
    
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
    width: 1200px;
`

const LinksWrapper = styled.div``

const Header = (porps) => {
    return (
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
                    </LinksWrapper>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Header
