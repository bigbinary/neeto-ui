import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Buttons from "./Buttons";
import FormElements from "./FormElements";
import Formik from "./Formik";
import Overlays from "./Overlays";
import Components from "./Components";
import Layouts from "./Layouts";

const Playground = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar />
      <div className="relative flex flex-col flex-grow h-screen overflow-auto">
        <Switch>
          <Route path="/playground/buttons" component={Buttons} />
          <Route path="/playground/form-elements" component={FormElements} />
          <Route path="/playground/formik" component={Formik} />
          <Route path="/playground/overlays" component={Overlays} />
          <Route path="/playground/components" component={Components} />
          <Route path="/playground/layouts" component={Layouts} />
          <Route path="*" component={Buttons} />
        </Switch>
      </div>
    </div>
  );
};

export default Playground;
