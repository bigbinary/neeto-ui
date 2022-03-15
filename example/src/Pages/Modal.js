import React, { useState } from "react";
import { Check } from "@bigbinary/neeto-icons";
import { Button, Modal, Alert } from "../../../lib/components";
import Header from "../Header";

const Modals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="w-full">
      <Header title="Modal" />

      <div className="p-6 space-y-6">
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
        <Modal.Footer>
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

export default Modals;
