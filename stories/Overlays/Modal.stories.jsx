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
  const [showModal2, setShowModal2] = useState(false);
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
              label="Focus here"
              ref={buttonRef}
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        // initialFocusRef={inputRef}
        // finalFocusRef={buttonRef}
      >
        <Modal.Header description="Short description">
          <Typography style="h2" id="dialog1Title">
            They're creepy & they're kooky
          </Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live The Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're The Herculoids!
          </Typography>
          <Input ref={inputRef} label="Name" />
          <Input label="Name" />
          <Input label="Name" />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Continue"
            onClick={() => setShowModal2(true)}
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
      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
        <Modal.Header description="Short description">
          <Typography style="h2" id="dialog1Title">
            They're creepy & they're kooky
          </Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live The Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're The Herculoids!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Continue"
            onClick={() => setShowModal2(false)}
            size="large"
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal2(false)}
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
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live The Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
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
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live The Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
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
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live The Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're The Herculoids!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
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

export const ModalWithBodyScroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="flex flex-col items-start justify-start">
          <Button label="Open Modal" onClick={() => setIsModalOpen(true)} />
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blandi
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blandi
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blanditiis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            fugiat ea modi cupiditate illum quibusdam nobis voluptates veritatis
            ipsa, reiciendis laudantium dolor aut similique eaque consequatur
            eos error eligendi blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Atque fugiat ea modi cupiditate illum
            quibusdam nobis voluptates veritatis ipsa, reiciendis laudantium
            dolor aut similique eaque consequatur eos error eligendi blandi
          </Typography>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="md"
      >
        <Modal.Header>
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Somewhere out in space live The Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Continue"
            onClick={() => setIsModalOpen(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setIsModalOpen(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
