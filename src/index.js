import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {
  
} from "../lib";
import Sidebar from './Sidebar';
import Buttons from './Previews/Buttons';
import FormElements from './Previews/FormElements';
import Formik from './Previews/Formik';
import Overlays from './Previews/Overlays';
import Components from './Previews/Components';

const App = () => {
  

  

  return (
    <BrowserRouter>
      <div className="flex flex-row items-start justify-start">
        <Sidebar/>
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <Switch>
            <Route path="/buttons" component={Buttons}/>
            <Route path="/form-elements" component={FormElements}/>
            <Route path="/formik" component={Formik}/>
            <Route path="/overlays" component={Overlays}/>
            <Route path="/components" component={Components}/>
            <Redirect from="/" to="/buttons" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
