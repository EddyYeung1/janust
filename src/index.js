import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Lading.js";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Landing />
  </BrowserRouter>,
  document.getElementById("root")
);
