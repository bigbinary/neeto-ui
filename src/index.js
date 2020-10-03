import React from "react";
import ReactDOM from "react-dom";
import { Button } from '../lib';

const App = () => {
  return (
    <div>
      <Button label="Testing" />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
