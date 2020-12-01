import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Card, IconPicker } from "../lib";

const App = () => {
  const [icon, setIcon] = useState(null)
  return (
    <>
      Hello
      <IconPicker value={icon} onChange={setIcon} />

      <Card
        rows={1}
        className="mt-6"
      >
        <Card.Title>My Card Title</Card.Title>
        <p>Card Item 1</p>
        <p>Card Item 2</p>
      </Card>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
