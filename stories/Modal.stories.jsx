import React, { useState } from "react";
import { Check } from "@bigbinary/neeto-icons";

import Button from "../lib/components/Button";
import Modal from "../lib/components/Modal";

export default {
  title: "Overlays/Modal",
  component: Modal,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Modal } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const Default = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Modal" onClick={() => setShowModal(true)} />
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
            size="large"
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
            size="large"
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalSizing = () => {
  const [showModalExtraSmall, setShowModalExtraSmall] = useState(false);
  const [showModalSmall, setShowModalSmall] = useState(false);
  const [showModalMedium, setShowModalMedium] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              label="Extra Small"
              onClick={() => setShowModalExtraSmall(true)}
            />
            <Button label="Small" onClick={() => setShowModalSmall(true)} />
            <Button label="Medium" onClick={() => setShowModalMedium(true)} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModalExtraSmall}
        onClose={() => setShowModalExtraSmall(false)}
        size="xs"
      >
        <Modal.Header>
          <h2>They're creepy & they're kooky</h2>
        </Modal.Header>
        <Modal.Body>
          Somewhere out in space live The Herculoids! Zok, the laser-ray dragon!
          Igoo, the giant rock ape! Tundro, the tremendous!
        </Modal.Body>
        <Modal.Footer className="space-x-4">
          <Button
            icon={Check}
            size="large"
            label="Continue"
            onClick={() => setShowModalExtraSmall(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalExtraSmall(false)}
          />
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalSmall}
        onClose={() => setShowModalSmall(false)}
        size="sm"
      >
        <Modal.Header>
          <h2>They're creepy & they're kooky</h2>
        </Modal.Header>
        <Modal.Body>
          Somewhere out in space live The Herculoids! Zok, the laser-ray dragon!
          Igoo, the giant rock ape! Tundro, the tremendous!
        </Modal.Body>
        <Modal.Footer className="space-x-4">
          <Button
            icon={Check}
            size="large"
            label="Continue"
            onClick={() => setShowModalSmall(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalSmall(false)}
          />
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalMedium}
        onClose={() => setShowModalMedium(false)}
        size="md"
      >
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
            size="large"
            label="Continue"
            onClick={() => setShowModalMedium(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalMedium(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
