import React, { useState } from "react";

import Alert from "components/Alert";
import Button from "components/Button";
import Input from "components/Input";
import Modal from "components/Modal";
import Pane from "components/Pane";
import Typography from "components/Typography";
import { manager as OverlayManager } from "managers";

import PaneStoriesDocs from "!raw-loader!./PaneStoriesDocs.mdx";

const metadata = {
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
    docs: { description: { component: PaneStoriesDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Ebh2R78Ia9FEVpC4tw6d3N/03-Layouts?node-id=616%3A4342",
    },
  },
  argTypes: {
    onClose: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const Default = args => {
  const [showPane, setShowPane] = useState(false);
  const inputRef = React.useRef(null);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Pane" onClick={() => setShowPane(true)} />
          </div>
        </div>
      </div>
      <Pane
        {...args}
        initialFocusRef={inputRef}
        isOpen={showPane}
        onClose={() => setShowPane(false)}
      >
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Typography
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <div className="mb-4 w-full">
            <Input label="Input Label" ref={inputRef} />
          </div>
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
          <Button label="Continue" onClick={() => setShowPane(false)} />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
};

const Sizes = args => {
  const [showPaneExtraSmall, setShowPaneExtraSmall] = useState(false);
  const [showPaneLarge, setShowPaneLarge] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Small" onClick={() => setShowPaneExtraSmall(true)} />
            <Button label="Large" onClick={() => setShowPaneLarge(true)} />
          </div>
        </div>
      </div>
      <Pane
        {...args}
        isOpen={showPaneExtraSmall}
        size="small"
        onClose={() => setShowPaneExtraSmall(false)}
      >
        <Pane.Header>
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography lineHeight="normal" style="body2">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous!
          </Typography>
        </Pane.Body>
        <Pane.Footer className="space-x-2">
          <Button
            label="Continue"
            onClick={() => setShowPaneExtraSmall(false)}
          />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setShowPaneExtraSmall(false)}
          />
        </Pane.Footer>
      </Pane>
      <Pane
        {...args}
        isOpen={showPaneLarge}
        size="large"
        onClose={() => setShowPaneLarge(false)}
      >
        <Pane.Header>
          <Typography style="h2">They're creepy & they're kooky</Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography lineHeight="normal" style="body2">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
            and his wife, Tara, and son, Dorno, they team up to protect their
            planet from sinister invaders! All-strong! All-brave! All-heroes!
            They're the Herculoids!
          </Typography>
        </Pane.Body>
        <Pane.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowPaneLarge(false)} />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setShowPaneLarge(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
};

const PaneWithLongTitle = args => {
  const [showPane, setShowPane] = useState(false);
  const inputRef = React.useRef(null);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Pane" onClick={() => setShowPane(true)} />
          </div>
        </div>
      </div>
      <Pane
        {...args}
        initialFocusRef={inputRef}
        isOpen={showPane}
        onClose={() => setShowPane(false)}
      >
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            This is a title that will break into two or maybe three lines! But,
            the footer will stay at the bottom. Yay!
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <div className="mb-4 w-full">
            <Input label="Input Label" ref={inputRef} />
          </div>
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
          <Button label="Continue" onClick={() => setShowPane(false)} />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
};

const PaneWithModalAndAlert = args => {
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
      <Pane {...args} isOpen={showPane} onClose={() => setShowPane(false)}>
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
          <Button label="Continue" onClick={() => setShowPane(false)} />
          <Button
            label="Cancel"
            style="text"
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
            onChange={event => setInputValue(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setShowModal(false)} />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
      <Alert
        isOpen={showAlert}
        message="All of your unsaved changes will be lost. This can't be undone."
        submitButtonLabel="Discard changes"
        title="You have unsaved changes"
        onClose={() => setShowAlert(false)}
        onSubmit={() => setShowAlert(false)}
      />
    </div>
  );
};
PaneWithModalAndAlert.storyName = "Pane with Modal and Alert";

const MultiplePanes = args => {
  const [isFirstPaneVisible, setIsFirstPaneVisible] = useState(false);
  const [isSecondPaneVisible, setIsSecondPaneVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-2">
            <Button
              label="Show Pane"
              onClick={() => setIsFirstPaneVisible(true)}
            />
          </div>
        </div>
      </div>
      <Pane
        {...args}
        isOpen={isFirstPaneVisible}
        onClose={() => setIsFirstPaneVisible(false)}
      >
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
            <Button
              label="Show second pane"
              onClick={() => setIsSecondPaneVisible(true)}
            />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            label="Continue"
            onClick={() => setIsFirstPaneVisible(false)}
          />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setIsFirstPaneVisible(false)}
          />
        </Pane.Footer>
      </Pane>
      <Pane
        {...args}
        isOpen={isSecondPaneVisible}
        onClose={() => setIsSecondPaneVisible(false)}
      >
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
            <Button
              label="Show modal"
              onClick={() => setIsModalVisible(true)}
            />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            label="Continue"
            onClick={() => setIsSecondPaneVisible(false)}
          />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setIsSecondPaneVisible(false)}
          />
        </Pane.Footer>
      </Pane>
      <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <Modal.Header>
          <h2>Add label</h2>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setIsModalVisible(false)} />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setIsModalVisible(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
MultiplePanes.storyName = "Nested panes with modals";

const PaneWithOverlayManager = args => {
  const [isFirstPaneVisible, setIsFirstPaneVisible] = useState(false);
  const [isSecondPaneVisible, setIsSecondPaneVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-2">
            <Button
              label="Show Pane"
              onClick={() => setIsFirstPaneVisible(true)}
            />
            <Button
              label="Check overlays"
              onClick={() =>
                window.alert(
                  `The current application ${
                    OverlayManager.hasOverlays() ? "has" : "does not have"
                  } overlays.`
                )
              }
            />
          </div>
        </div>
      </div>
      <Pane
        {...args}
        isOpen={isFirstPaneVisible}
        onClose={() => setIsFirstPaneVisible(false)}
      >
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
            <Button
              label="Show second pane"
              onClick={() => setIsSecondPaneVisible(true)}
            />
            <Button
              label="Check overlays"
              onClick={() =>
                window.alert(
                  `The current application ${
                    OverlayManager.hasOverlays() ? "has" : "does not have"
                  } overlays.`
                )
              }
            />
            <Button
              label="Ref to top overlay"
              // eslint-disable-next-line no-console
              onClick={() => console.log(OverlayManager.getTopMostOverlay())}
            />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            label="Continue"
            onClick={() => setIsFirstPaneVisible(false)}
          />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setIsFirstPaneVisible(false)}
          />
        </Pane.Footer>
      </Pane>
      <Pane
        {...args}
        isOpen={isSecondPaneVisible}
        onClose={() => setIsSecondPaneVisible(false)}
      >
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
            <Button
              label="Show modal"
              onClick={() => setIsModalVisible(true)}
            />
            <Button
              label="Check overlays"
              onClick={() =>
                window.alert(
                  `The current application ${
                    OverlayManager.hasOverlays() ? "has" : "does not have"
                  } overlays.`
                )
              }
            />
            <Button
              label="Ref to top overlay"
              // eslint-disable-next-line no-console
              onClick={() => console.log(OverlayManager.getTopMostOverlay())}
            />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            label="Continue"
            onClick={() => setIsSecondPaneVisible(false)}
          />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setIsSecondPaneVisible(false)}
          />
        </Pane.Footer>
      </Pane>
      <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <Modal.Header>
          <h2>Add label</h2>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2">
            Somewhere out in space live the Herculoids! Zok, the laser-ray
            dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
            Gleep, the formless, fearless wonders! With Zandor, their leader,
          </Typography>
          <div className="flex space-x-2">
            <Button
              label="Check overlays"
              onClick={() =>
                window.alert(
                  `The current application ${
                    OverlayManager.hasOverlays() ? "has" : "does not have"
                  } overlays.`
                )
              }
            />
            <Button
              label="Ref to top overlay"
              // eslint-disable-next-line no-console
              onClick={() => console.log(OverlayManager.getTopMostOverlay())}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button label="Continue" onClick={() => setIsModalVisible(false)} />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setIsModalVisible(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
PaneWithOverlayManager.storyName = "Pane with overlay manager";

const DynamicFieldFocusInsidePane = args => {
  const [showPane, setShowPane] = useState(false);
  const [isInputFieldVisible, setIsInputFieldVisible] = useState(false);
  const [inputFields, setInputFields] = useState([]);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              label="Show Pane"
              onClick={() => {
                setShowPane(true);
                setTimeout(() => {
                  setIsInputFieldVisible(true);
                }, 2500);
              }}
            />
          </div>
        </div>
      </div>
      <Pane {...args} isOpen={showPane} onClose={() => setShowPane(false)}>
        {({ setFocusField }) => (
          <>
            <Pane.Header>
              <Typography style="h2" weight="semibold">
                Typography
              </Typography>
            </Pane.Header>
            <Pane.Body>
              <div className="mb-4 w-full space-y-4">
                <Input label="Input Label" />
                {isInputFieldVisible && (
                  <Input label="Dynamic field" ref={setFocusField} />
                )}
                <Button
                  label="Add Field"
                  onClick={() => {
                    setInputFields([
                      ...inputFields,
                      {
                        name: `Dynamic Field ${inputFields.length + 1}`,
                      },
                    ]);
                  }}
                />
                {inputFields.map(field => (
                  <Input
                    key={field.name}
                    label={field.name}
                    ref={setFocusField}
                  />
                ))}
              </div>
              <Typography style="body2">
                Somewhere out in space live the Herculoids! Zok, the laser-ray
                dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop
                and Gleep, the formless, fearless wonders! With Zandor, their
                leader, and his wife, Tara, and son, Dorno, they team up to
                protect their planet from sinister invaders! All-strong!
                All-brave! All-heroes! They're the Herculoids!
              </Typography>
            </Pane.Body>
            <Pane.Footer className="flex items-center space-x-2">
              <Button label="Continue" onClick={() => setShowPane(false)} />
              <Button
                label="Cancel"
                style="text"
                onClick={() => setShowPane(false)}
              />
            </Pane.Footer>
          </>
        )}
      </Pane>
    </div>
  );
};

DynamicFieldFocusInsidePane.parameters = {
  docs: {
    description: {
      story: `To focus on a dynamic focusable component please use render callback approach, in which you will
        get \`setFocusField\` method in thecallback. This method could be passed to ref of the component
        which you want to focus.
        \nYou can also use this approach to set focus on any field that you later add to the pane.
        \n𝘜𝘯𝘥𝘦𝘳 𝘵𝘩𝘦 𝘩𝘰𝘰𝘥 𝘸𝘦 𝘶𝘴𝘦 𝘙𝘦𝘢𝘤𝘵'𝘴 𝘊𝘢𝘭𝘭𝘣𝘢𝘤𝘬 𝘙𝘦𝘧 𝘢𝘱𝘱𝘳𝘰𝘢𝘤𝘩.`,
    },
  },
};
DynamicFieldFocusInsidePane.storyName = "Dynamic field focus inside pane";

export {
  Default,
  Sizes,
  PaneWithLongTitle,
  PaneWithModalAndAlert,
  MultiplePanes,
  PaneWithOverlayManager,
  DynamicFieldFocusInsidePane,
};

export default metadata;
