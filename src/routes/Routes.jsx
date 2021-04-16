import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../modules/favorites/Favorites'
import Films from '../modules/films/Films'

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/films" render={(props) => <Films {...props} />} />
            <Route path="/favorites" render={(props) => <Favorites {...props} />} />
        </Switch>
    )
}

export default Routes
