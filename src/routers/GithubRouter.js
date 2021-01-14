import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { DetailsScreen } from '../pages/DetailsScreen';
import { JobsScreen } from '../pages/JobsScreen';

export const GithubRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={JobsScreen}/>
                <Route exact path="/job/:id" component={DetailsScreen}/>

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
