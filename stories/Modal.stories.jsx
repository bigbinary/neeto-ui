import React, { useState } from "react";
import { Check } from "@bigbinary/neeto-icons";

import Button from "../lib/components/Button";
import Modal from "../lib/components/Modal";
import Alert from "../lib/components/Alert";

export default {
  title: "Overlays/Modal",
  component: Modal,
  subcomponents: { Button, Alert },
  parameters: {
    layout: "padded",
  },
};

export const Modals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Modal" onClick={() => setShowModal(true)} />
            <Button label="Show Alert" onClick={() => setShowAlert(true)} />
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <h2>Add Label</h2>
        </Modal.Header>
        <Modal.Body>
          Somewhere out in space live The Herculoids! Zok, the laser-ray dragon!
          Igoo, the giant rock ape! Tundro, the tremendous! Gloop and Gleep, the
          formless, fearless wonders! With Zandor, their leader, and his wife,
          Tara, and son, Dorno, they team up to protect their planet from
          sinister invaders! All-strong! All-brave! All-heroes! They're The
          Herculoids!
        </Modal.Body>
        <Modal.Footer className="space-x-4">
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
