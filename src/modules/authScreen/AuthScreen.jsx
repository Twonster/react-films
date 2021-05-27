import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { Button } from 'antd';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { setUserIsAutorised } from '../../redux/actions/authActions/userAuthActions';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 500px;
    justify-content: flex-start;
    margin: 50px 0 0 0;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    flex-direction: column;

`
const ButtonContainer = styled.div`
    padding: 0 5px;
    display: flex;
    justify-content: flex-end;
`
const ScreenText = styled.p`
    color: #1890ff;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
`

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}

const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
}

const AuthScreen = ({ history }) => {
    const [isRegistration, setisRegistration] = useState(false)
    const toggleText = ['don\'t have an account?', 'log in']
    const dispatcher = useDispatch()
    
    useEffect(() => {
        const check = localStorage.getItem('token')
        dispatcher(setUserIsAutorised(!!check))
    },[dispatcher])
    return (
        <Container>
            {
                <Wrapper>
                    {
                    !isRegistration ? <ScreenText>Please login</ScreenText> : <ScreenText>Please sign up</ScreenText>
                    }
                    <ButtonContainer>
                        <Button type="link" onClick={() => setisRegistration(!isRegistration)}>{!isRegistration ? toggleText[0] : toggleText[1]}</Button>
                    </ButtonContainer>
                    {!isRegistration
                        ? <SignInForm layout={layout} tailLayout={tailLayout} {...history}/>
                        : <SignUpForm layout={layout} tailLayout={tailLayout} regDone={() => setisRegistration(false)} {...history}/>
                    }
                </Wrapper>
            }
        </Container>
    )
}

export default AuthScreen
