import React from 'react'
import { Redirect, Route } from 'react-router'


const PrivatRouter = ({component: RouteComponent, ...rest}) => {
    const isAuth = localStorage.getItem('token')
    console.log('token', isAuth)
    console.log('data', RouteComponent)
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
