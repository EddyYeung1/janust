import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Lading.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
