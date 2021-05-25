import React, { useEffect } from 'react'
import styled from 'styled-components'

import { LoadingOutlined } from '@ant-design/icons'
import { Form, Input, Button, Checkbox, Alert, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AUTORISE_USER } from '../../redux/actions/sagaActionTypes';

const Container = styled.div`
    overflow-y: scroll;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 300px;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`
const antIcon = <LoadingOutlined style={{ fontSize: 50, height: '100%', }} spin />;

const SignInForm = ({ layout, tailLayout, push }) => {
    const { message, loading, error, status, isAutorised } = useSelector(({ userAuthDataReducer }) =>  userAuthDataReducer )
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    const dispatcher = useDispatch()

    const requestHandler = async (values) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ 
                user_email: values.email,
                user_password: values.password,
            })
        }
        await dispatcher({ type: AUTORISE_USER, url: 'http://localhost:8080/api/auth/user-auth', options: requestOptions })

    }

    useEffect(() => {
        if (isAutorised) {
            setTimeout(() => push('/react-films/films'), 1000)
        }
    }, [isAutorised])

    return (
        <Container>
            <Wrapper>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={requestHandler}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Sign In</Button>
                    </Form.Item>
                </Form>
            </Wrapper>
                {loading 
                ?  <Spin indicator={antIcon} />
                :  error 
                    ?   <Alert
                            message={`Error status ${status}`}
                            description={message}
                            type="error"
                        />
                    :   message.length !== 0   
                        && <Alert
                            message="Success"
                            description={message}
                            type="success"
                        />}
        </Container>
    )
}

export default SignInForm
