import React, { useState } from "react";

import Button from "../../lib/components/Button";
import Modal from "../../lib/components/Modal";
import Typography from "../../lib/components/Typography";
import Input from "../../lib/components/Input";

export default {
  title: "Overlays/Modal",
  component: Modal,
  subcomponents: {
    "Modal.Header": Modal.Header,
    "Modal.Body": Modal.Body,
    "Modal.Footer": Modal.Footer,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Modal } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A20",
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
        <Modal.Header description="Short description">
          <Typography style="h2" id="dialog1Title">
            They're creepy & they're kooky
          </Typography>
        </Modal.Header>
        <Modal.Body className="space-y-2">
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModal(false)} />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const Sizes = () => {
  const [showModalExtraSmall, setShowModalExtraSmall] = useState(false);
  const [showModalMedium, setShowModalMedium] = useState(false);
  const [showModalLarge, setShowModalLarge] = useState(false);
  const [showModalFullScreen, setShowModalFullScreen] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              label="Small"
              onClick={() => setShowModalExtraSmall(true)}
            />
            <Button label="Medium" onClick={() => setShowModalMedium(true)} />
            <Button label="Large" onClick={() => setShowModalLarge(true)} />
            <Button label="Full Screen" onClick={() => setShowModalFullScreen(true)} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModalExtraSmall}
        onClose={() => setShowModalExtraSmall(false)}
        size="small"
      >
        <Modal.Header>
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Continue"
            onClick={() => setShowModalExtraSmall(false)}
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModalExtraSmall(false)}
          />
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalMedium}
        onClose={() => setShowModalMedium(false)}
        size="medium"
      >
        <Modal.Header>
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModalMedium(false)} />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModalMedium(false)}
          />
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalLarge}
        onClose={() => setShowModalLarge(false)}
        size="large"
      >
        <Modal.Header>
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModalLarge(false)} />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModalLarge(false)}
          />
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalFullScreen}
        onClose={() => setShowModalFullScreen(false)}
        size="fullScreen"
      >
        <Modal.Header>
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModalLarge(false)} />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModalLarge(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalFocusTrapping = () => {
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
        <Modal.Header
          description="Try pressing tab or shift + tab on your keyboard. You would realise
            that the focus is trapped to within the Modal. This is done
            inherently by the Modal component."
        >
          <Typography style="h2" id="dialog1Title">
            They're creepy & they're kooky
          </Typography>
        </Modal.Header>
        <Modal.Body className="space-y-2">
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
          <Input label="First name" />
          <Input label="Last name" />
          <Input type="email" label="Email" />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModal(false)} />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
ModalFocusTrapping.storyName = "Modal focus trapping";

export const NestedModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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
        <Modal.Header
          description="Try pressing tab or shift + tab on your keyboard. You would realise
            that the focus is trapped to within the Modal. This is done
            inherently by the Modal component."
        >
          <Typography style="h2" id="dialog1Title">
            They're creepy & they're kooky
          </Typography>
        </Modal.Header>
        <Modal.Body className="space-y-2">
          <Typography style="body2" lineHeight="normal">
            Try pressing tab or shift + tab on your keyboard. You would realise
            that the focus is trapped to within the Modal. This is done
            inherently by the Modal component.
          </Typography>
          <Input label="First name" />
          <Input label="Last name" />
          <Input type="email" label="Email" />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Open second Modal"
            onClick={() => setShowModal2(true)}
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
        <Modal.Header description="Now, you would notice that the focus is trapped inside of the second Modal.">
          <Typography style="h2" id="dialog1Title">
            They're creepy & they're kooky
          </Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModal2(false)} />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal2(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
NestedModals.storyName = "Nested modals";

export const InitialAndFinalFocusRef = () => {
  const [showModal, setShowModal] = useState(false);
  const inputRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Modal" onClick={() => setShowModal(true)} />
            <Button
              style="secondary"
              label="Focus here on close"
              ref={buttonRef}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        initialFocusRef={inputRef}
        finalFocusRef={buttonRef}
      >
        <Modal.Header description="The focous would be on the input field for first name on opening of the Modal and on the secondary button on close.">
          <Typography style="h2" id="dialog1Title">
            They're creepy & they're kooky
          </Typography>
        </Modal.Header>
        <Modal.Body className="space-y-2">
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
          <Input ref={inputRef} label="First name" />
          <Input label="Last name" />
          <Input type="email" label="Email" />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModal(false)} />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
InitialAndFinalFocusRef.storyName = "Initial and final focus ref";
