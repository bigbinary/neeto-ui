import React from "react";

import { Modal, Typography, Pane } from "components";
import Button from "components/Button";
import TimePicker from "components/TimePicker";
import { dayjs } from "utils";

import { disabledDateTime } from "./constants";

import TimePickerCSSCustomization from "!raw-loader!./TimePickerStoriesDocs/TimePickerCSSCustomization.mdx";
import TimePickerDocs from "!raw-loader!./TimePickerStoriesDocs/TimePickerDocs.mdx";

const metadata = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: TimePickerDocs } },
  },
  argTypes: {
    onChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "-" },
      },
    },
  },
};

const TimeInput = args => (
  <TimePicker disabledTime={disabledDateTime} {...args} />
);

TimeInput.storyName = "TimePicker";
TimeInput.args = { type: "time" };

const TimePickerInModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button label="Open modal" onClick={() => setIsOpen(true)} />
      <Modal {...{ isOpen }} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Typography style="h2">Modal</Typography>
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div>
            <Typography>Time</Typography>
            <TimePicker
              {...args}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};
TimePickerInModal.storyName = "TimePicker in modal";

const TimePickerInPane = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button label="Open pane" onClick={() => setIsOpen(true)} />
      <Pane {...{ isOpen }} onClose={() => setIsOpen(false)}>
        <Pane.Header>
          <Typography style="h3">Pane</Typography>
        </Pane.Header>
        <Pane.Body className="flex flex-col space-y-6">
          <div className="w-full">
            <Typography>Time</Typography>
            <TimePicker
              {...args}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </div>
        </Pane.Body>
      </Pane>
    </>
  );
};
TimePickerInPane.storyName = "TimePicker in pane";

const TimePickerWithRef = args => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-3">
      <Button label="Focus" onClick={() => ref.current.focus()} />
      <TimePicker
        {...{ ...args, open, ref }}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onOk={() => setOpen(false)}
      />
    </div>
  );
};
TimePickerWithRef.storyName = "TimePicker with ref";

const TimePickerWithDefaultValue = args => (
  <div className="space-y-3">
    <TimePicker defaultValue={dayjs()} {...args} />
  </div>
);
TimePickerWithDefaultValue.storyName = "TimePicker with default value";
TimePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a [dayjs](https://www.npmjs.com/package/dayjs) object.",
    },
  },
};

const RequiredTimePicker = args => <TimePicker {...args} />;

RequiredTimePicker.storyName = "Required TimePicker";

RequiredTimePicker.args = {
  type: "time",
  required: true,
  label: "Required Picker",
};

const CSSCustomization = args => <TimePicker {...args} />;

CSSCustomization.storyName = "TimePicker CSS Customization";

CSSCustomization.args = {
  type: "time",
  className: "neetix-timepicker",
};

CSSCustomization.parameters = {
  docs: { description: { story: TimePickerCSSCustomization } },
};

export {
  TimeInput,
  TimePickerInModal,
  TimePickerInPane,
  TimePickerWithRef,
  TimePickerWithDefaultValue,
  RequiredTimePicker,
  CSSCustomization,
};

export default metadata;
