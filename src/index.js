import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Lading.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/landing" component={Landing} />
      <Redirect from="/" to="/landing" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
