import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../modules/header/Header'
import AuthScreen from '../modules/authScreen/AuthScreen'
import Favorites from '../modules/favorites/Favorites'
import FilmPage from '../modules/films/filmPage/FilmPage'
import Films from '../modules/films/Films'
import PrivatRouter from './PrivatRoute'

import { setUserIsAutorised } from '../redux/actions/authActions/userAuthActions'

const Routes = (props) => {
    const dispatcher = useDispatch()
    const { isAutorised } = useSelector( ({ userAuthDataReducer }) => userAuthDataReducer )

    useEffect(() => {
        const check = localStorage.getItem('token')
        dispatcher(setUserIsAutorised(!!check))
    },[])
    console.log('render-route')
    return (
        <>
           {isAutorised && <PrivatRouter path="/" component={Header} />}
            <Switch>
                <Route exact path="/auth" render={(props) => <AuthScreen {...props} />} />
                <PrivatRouter exact path="/films" component={Films} />
                <PrivatRouter exact path="/favorites" component={Favorites} />
                <PrivatRouter exact path="/films/film-id/:id" component={FilmPage} />            
            </Switch>
        </>
    )
}

export default Routes
