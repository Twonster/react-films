import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import { Alert } from 'antd';
import { Button } from 'antd';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import logo from '../../images/logo.svg'
import { showing } from '../../animations.js';
import { clearRegData } from '../../redux/actions/authActions/userRegAction';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 500px;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    flex-direction: column;
    animation: ${showing} 0.5s linear;

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
const HelloText = styled.p`
    background-color: #1890ff;
    font-size: 30px;
    color: #fff;
    text-align: center;
    font-weight: 700;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    animation: ${showing} 2s linear;

    & img {
        width: 60px;
    }
`

const antIcon = <LoadingOutlined style={{ fontSize: 50, height: '100%', }} spin />;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
};

const AuthScreen = (props) => {
    const { message, loading, error, status } = useSelector(({ userAuthDataReducer }) =>  userAuthDataReducer )
    const [isRegistration, setisRegistration] = useState(false);
    const toggleText = ['don\'t have an account?', 'log in']
    
    return (
        <Container>
            <HelloText>WELCOME TO DVABOBA FILMS <img src={logo} alt="" /></HelloText>
            {
                loading 
                ? <Spin indicator={antIcon} /> 
                : <Wrapper>
                    {
                    !isRegistration ? <ScreenText>Please login</ScreenText> : <ScreenText>Please sign up</ScreenText>
                    }
                    <ButtonContainer>
                        <Button type="link" onClick={() => setisRegistration(!isRegistration)}>{!isRegistration ? toggleText[0] : toggleText[1]}</Button>
                    </ButtonContainer>
                    {!isRegistration
                        ? <SignInForm layout={layout} tailLayout={tailLayout} message={message}/>
                        : <SignUpForm layout={layout} tailLayout={tailLayout}/>
                    }
                    {
                        error 
                        ?   <Alert
                                message="Error Text"
                                description={message}
                                type="error"
                            />
                        :  message.length !== 0   
                            && <Alert
                                message="Success"
                                description={message}
                                type="success"
                            />  
                    }
                  </Wrapper>
            }
        </Container>
    )
}

export default AuthScreen
