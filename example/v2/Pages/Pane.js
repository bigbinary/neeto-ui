import React, { useState } from "react";
import { Check } from "@bigbinary/neeto-icons";
import {
  Button,
  Pane,
} from "../../../lib/components";
import Header from "../Header";

const Panes = () => {
  const [showPane, setShowPane] = useState(false);
  return (
    <div className="w-full">
      <Header title="Pane" />
      
      <div className="p-6 space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Pane" onClick={() => setShowPane(true)} />
          </div>
        </div>
      </div>
      
      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <h2>User Info</h2>
        </Pane.Header>
        <Pane.Body>
          Somewhere out in space live The Herculoids! Zok, the laser-ray dragon!
          Igoo, the giant rock ape! Tundro, the tremendous! Gloop and Gleep, the
          formless, fearless wonders! With Zandor, their leader, and his wife,
          Tara, and son, Dorno, they team up to protect their planet from sinister
          invaders! All-strong! All-brave! All-heroes! They're The Herculoids!
        </Pane.Body>
        <Pane.Footer className="flex space-x-4">
          <Button
            icon={Check}
            label="Continue"
            onClick={() => setShowPane(false)}
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
};

export default Panes;
