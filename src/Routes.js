import React from "react";
import { Route, Switch } from "react-router-dom";

import Order from './containers/Order'
import NotFoundScreen from './containers/NotFound'

export default () => (
    <Switch >
        <Route path="/" component={Order} />
        <Route component={NotFoundScreen} />
    </Switch>
)