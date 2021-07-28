import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Playground from "./Playground";
import Documentation from "../Documentation";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route path="/playground" component={Playground} />
        <Route path="/documentation" component={Documentation} />
        <Redirect from="/" to="/documentation" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
