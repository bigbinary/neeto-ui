import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "../../lib/layouts/v2";
import Buttons from "./Buttons";
import FormElements from "./FormElements";
import InputFields from "./InputFields";

import "./index.scss";

const navLinks = [
  {
    label: "Buttons",
    to: "/buttons",
  },
  {
    label: "Form Elements",
    to: "/form-elements",
  },
  {
    label: "Input Fields",
    to: "/input-fields",
  },
];

const Playground = () => {
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar
          organizationInfo={{
            name: "neetoUI",
            subdomain: "neetoui.netlify.app",
          }}
          navLinks={navLinks}
        />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <Switch>
            <Route path="/buttons" component={Buttons} />
            <Route path="/form-elements" component={FormElements} />
            <Route path="/input-fields" component={InputFields} />
            <Route path="*" component={Buttons} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Playground;
