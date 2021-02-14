import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Lading.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing" component={Landing} />
      <Redirect from="https://eddyyeung1.github.io/janust/" to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
