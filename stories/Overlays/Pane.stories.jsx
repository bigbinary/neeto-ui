import React, { useState } from "react";
import { Check } from "@bigbinary/neeto-icons";

import Button from "../../lib/components/Button";
import Pane from "../../lib/components/Pane";
import Modal from "../../lib/components/Modal";
import Alert from "../../lib/components/Alert";
import Typography from "../../lib/components/Typography";
import Input from "../../lib/components/Input";

export default {
  title: "Overlays/Pane",
  component: Pane,
  subcomponents: {
    "Pane.Header": Pane.Header,
    "Pane.Body": Pane.Body,
    "Pane.Footer": Pane.Footer,
    Button,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Pane } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Ebh2R78Ia9FEVpC4tw6d3N/03-Layouts?node-id=616%3A4342",
    },
  },
};

export const Default = () => {
  const [showPane, setShowPane] = useState(false);
  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Pane" onClick={() => setShowPane(true)} />
          </div>
        </div>
      </div>

      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Typography
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="body2">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
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

export const PaneWithModalAndAlert = () => {
  const [showPane, setShowPane] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-2">
            <Button label="Show Pane" onClick={() => setShowPane(true)} />
          </div>
        </div>
      </div>

      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Typography
          </Typography>
        </Pane.Header>
        <Pane.Body className="space-y-4">
          <Typography style="body2">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
          <div className="flex space-x-2">
            <Button label="Show modal" onClick={() => setShowModal(true)} />
            <Button label="Show alert" onClick={() => setShowAlert(true)} />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
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
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <h2>Add label</h2>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
          <Input
            label="Input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            icon={Check}
            label="Continue"
            onClick={() => setShowModal(false)}
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
      <Alert
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        onSubmit={() => setShowAlert(false)}
        message="Are you sure you want to continue? All of your unsaved changes will be
          lost."
        title="You have unsaved changes!"
      />
    </div>
  );
};
PaneWithModalAndAlert.storyName = "Pane with Modal and Alert";
