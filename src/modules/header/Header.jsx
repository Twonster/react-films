import React from 'react'
import styled from 'styled-components'
import Button from '../../components/button/Button'
import HeaderInput from '../../components/input/HeaderInput'
import Link from '../../components/link/Link'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(9deg, #90cea1, #537bff);
    height: 70px;
    box-shadow: 0 0 20px 0 #00000094;
    position: sticky;
    width: 100%;

    & .right-side {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 80%;
    }
`

const LinksWrapper = styled.div``
const InputWrapper = styled.div``
const HeaderButton = styled(Button)``

const Header = (porps) => {
    return (
        <Wrapper>
            <span>LOGO</span>
            <div className="right-side">
                <LinksWrapper>
                    <Link text="favorites" href="/favorites"/>
                    <Link text="films" href="/films"/>
                    <Link text="home" href="/home"/>
                </LinksWrapper>
                <InputWrapper>
                    <HeaderInput />
                    {/* <HeaderButton /> */}
                </InputWrapper>
            </div>
        </Wrapper>
    )
}

export default Header
