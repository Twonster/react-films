import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../modules/header/Header'
import AuthScreen from '../modules/authScreen/AuthScreen'
import FilmPage from '../modules/films/filmPage/FilmPage'
import Films from '../modules/films/Films'
import PrivatRouter from './PrivatRoute'
import { setUserIsAutorised } from '../redux/actions/authActions/userAuthActions'
import Home from '../modules/home/Home'

const Routes = (props) => {
    const dispatcher = useDispatch()
    const { isAutorised } = useSelector( ({ userAuthDataReducer }) => userAuthDataReducer )

    useEffect(() => {
        const check = localStorage.getItem('token')
        dispatcher(setUserIsAutorised(!!check))
    }, [dispatcher])

    return (
        <>
           {isAutorised && <PrivatRouter isAutorised={isAutorised} path="/react-films/" component={Header} />}
            <Switch>
                <Route exact path="/react-films/auth" render={(props) => <AuthScreen {...props} />} />
                <PrivatRouter isAutorised={isAutorised} exact path="/react-films/films" component={Films} />
                <PrivatRouter isAutorised={isAutorised} exact path="/react-films/home" component={Home} />
                <PrivatRouter isAutorised={isAutorised} exact path="/react-films/films/film-id/:id" component={FilmPage} />            
            </Switch>
        </>
    )
}

export default Routes
