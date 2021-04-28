import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../modules/favorites/Favorites'
import FilmPage from '../modules/films/filmPage/FilmPage'
import Films from '../modules/films/Films'
import Header from '../modules/header/Header'

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/films" render={(props) => <Films {...props} />} />
            <Route exact path="/favorites" render={(props) => <Favorites {...props} />} />
            <Route exact path="/films/film-id/:id" render={(props) => <FilmPage {...props} />} />
            {/* <Route path="/" render={(props) => <Header {...props} />} /> */}
        </Switch>
    )
}

export default Routes
