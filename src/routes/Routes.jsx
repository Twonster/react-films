import React from 'react'
import { Route, Switch } from 'react-router'

import AuthScreen from '../modules/authScreen/AuthScreen'
import Favorites from '../modules/favorites/Favorites'
import FilmPage from '../modules/films/filmPage/FilmPage'
import Films from '../modules/films/Films'
import PrivatRouter from './PrivatRoute'

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/auth" render={(props) => <AuthScreen {...props} />} />
            <PrivatRouter exact path="/films" component={Films} />
            <PrivatRouter exact path="/favorites" component={Favorites} />
            <PrivatRouter exact path="/films/film-id/:id" component={FilmPage} />            
        </Switch>
    )
}

export default Routes
