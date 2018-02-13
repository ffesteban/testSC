import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home/home';
import Items from './Components/Items/item';

export default (
    <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/men">
            <Items />
        </Route>
    </Switch>
);