import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivatRouter = ({component: RouteComponent, isAutorised, ...rest}) => {

    return (
        <Route 
            {...rest}
            render={(props) => {
                return (     
                    isAutorised 
                    ? <RouteComponent {...props} {...rest} />
                    : <Redirect to="/react-films/auth" />
                )
            }}
        />
    )
}

export default PrivatRouter
