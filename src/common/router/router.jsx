import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../../pages/login';
import Dashboard from '../../pages/dashboard'

const route = () =>{
    const route = 
    <Router>
        <Switch>
            <Route
                path={`/`}
                exact={true}
                component={Login}
            />
            <Route
                path={`/dashboard`}
                exact={true}
                component={Dashboard}
            />
        </Switch>
    </Router>

    return route;
}

export default route;