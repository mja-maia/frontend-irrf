import React from "react";
import { Switch, Route } from "react-router-dom";

import ShowEmployee from "./../pages/ShowEmployee/ShowEmployee";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ShowEmployee} />
  </Switch>
);

export default Routes;
