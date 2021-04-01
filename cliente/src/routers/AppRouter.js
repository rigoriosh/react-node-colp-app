import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Info from '../components/Info';
import Login from '../components/Login';
import { rutes } from '../constApp/constApp';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={rutes.info} component={Info}/>
                    <Route exact path={rutes.login} component={Login}/>
                    <Redirect to={rutes.login} />
                </Switch>
            </Router>
        </>
    )
}
