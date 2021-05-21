import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

import { CREATE_USER_DATA } from '../../redux/actions/sagaActionTypes';

import { LoadingOutlined } from '@ant-design/icons'
import { Form, Input, Button, Alert, Spin } from 'antd';

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

const SignUpForm = ({ layout, tailLayout, regDone }) => {    
    const { message, loading, error, status, isRegistred } = useSelector(({ userRegistrationDataReducer }) => userRegistrationDataReducer)

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
                user_name: values.username,
                user_lastname: values.user_lastname,
                user_nickname: values.user_nickname
            })
        }
        dispatcher({ type: CREATE_USER_DATA, url: 'http://localhost:8080/api/auth/registration', options: requestOptions })
    }
    
    useEffect(() => {
        if (isRegistred) {
            setTimeout(() => regDone(), 1500)
        }
    }, [isRegistred])

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
                        label="Name"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last name"
                        name="user_lastname"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Last name!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Nickname"
                        name="user_nickname"
                        rules={[
                        {
                            required: false,
                            message: 'Please input your Nickname!',
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

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Sign Up</Button>
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

export default SignUpForm
