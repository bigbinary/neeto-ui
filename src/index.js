import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IconPicker } from "../lib";
import moment from "moment";
import { Position } from "@blueprintjs/core";

const App = () => {
  const [icon, seticon] = useState(null)
  return (
    <>
    Hello
    <IconPicker value={icon} onChange={seticon}/>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
