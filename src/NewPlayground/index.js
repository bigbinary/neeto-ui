import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Buttons from "./Buttons";
import Components from "./Components";

const Playground = () => {
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <Switch>
            <Route path="/v2/buttons" component={Buttons} />
            <Route path="/v2/form-elements" component={Components} />
            <Route path="*" component={Buttons} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Playground;
