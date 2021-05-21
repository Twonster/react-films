import React from 'react'
// import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'


const PrivatRouter = ({component: RouteComponent, ...rest}) => {
    // const { isAutorised } = useSelector(({ userAuthDataReducer }) => userAuthDataReducer)
    const isAuth = localStorage.getItem('token')

    return (
        <Route 
            {...rest}
            render={(props) => {
                return (     
                    isAuth 
                    ? <RouteComponent {...props} {...rest} />
                    : <Redirect to="/auth" />
                )
            } }
        />
    )
}

export default PrivatRouter
