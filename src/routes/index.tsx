import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "../pages/Form/Form";

import ShowEmployee from "./../pages/ShowEmployee/ShowEmployee";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ShowEmployee} />
    <Route path="/form/:cpf?" component={Form} />
  </Switch>
);

export default Routes;
