import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Callout, Card, Dropdown, IconPicker, Label } from "../lib";

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

      <Dropdown buttonStyle="icon" icon="ri-more-2-fill">
        <li>Download Transcript</li>
        <li>End Chat</li>
      </Dropdown>

      <Callout icon={false} style="info">
        <span className="leading-relaxed">
          Press
          <span className="font-semibold"> Shift + ?</span> on your
          keyboard at any point.
        </span>
      </Callout>

      <Label
        required
        helpText="Help Text"
        className="mb-1"
        data-cy="cypress-attrs"
      >
        My Label
      </Label>

      <Button
        dataTestId="add-new-ticket"
        icon="ri-add-fill ri-lg"
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
