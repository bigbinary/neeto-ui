import dayjs from "dayjs";
import React from "react";

import { Modal, Typography, Pane, DatePicker } from "../../lib/components";
import isChromatic from "chromatic/isChromatic";
import Button from "../../lib/components/Button";
import DateInputStoriesDocs from "!raw-loader!./DateInputStoriesDocs.mdx";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "padded",
    docs: {
      description: { component: DateInputStoriesDocs },
      source: {
        type: "code",
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A7",
    },
  },
};

export const DateInput = (args) => {
  return <DatePicker {...args} />;
};

DateInput.storyName = "DatePicker";
DateInput.args = {
  label: "Date",
  type: "date",
  picker: "date",
  showTime: false,
};

export const DatePickerWithRef = () => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-3">
      <Button label="Focus" onClick={() => ref.current.focus()} />
      <DatePicker
        ref={ref}
        open={open}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />
    </div>
  );
};
DatePickerWithRef.storyName = "DatePicker with ref";

export const DatePickerInModal = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button label="Open modal" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Typography style="h2">Modal</Typography>
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div>
            <Typography>Date</Typography>
            <DatePicker
              {...args}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
DatePickerInModal.storyName = "DatePicker in modal";

export const DatePickerInPane = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button label="Open pane" onClick={() => setIsOpen(true)} />
      <Pane isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Pane.Header>
          <Typography style="h3">Pane</Typography>
        </Pane.Header>
        <Pane.Body className="flex flex-col space-y-6">
          <div className="w-full">
            <Typography>Date</Typography>
            <DatePicker
              {...args}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </div>
        </Pane.Body>
      </Pane>
    </>
  );
};
DatePickerInPane.storyName = "DatePicker in pane";

export const DatePickerWithDefaultValue = (args) => {
  return (
    <div className="space-y-3">
      <DatePicker
        defaultValue={isChromatic() ? dayjs(new Date(1999, 7, 16)) : dayjs()}
        {...args}
      />
    </div>
  );
};
DatePickerWithDefaultValue.storyName = "DatePicker with default value";

DatePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a `dayjs` object.",
    },
  },
};

export const DateRangePicker = () => {
  return (
    <div className="space-y-3">
      <DatePicker
        label="Date range"
        type="range"
        defaultValue={
          isChromatic()
            ? [
                dayjs(new Date(1999, 7, 16)),
                dayjs(new Date(1999, 7, 16)).add(7, "day"),
              ]
            : [dayjs(), dayjs().add(7, "day")]
        }
      />
    </div>
  );
};
DateRangePicker.storyName = "DateRangePicker";

export const ShowTime = () => {
  return <DatePicker showTime label="Date" type="date" picker="date" />;
};
ShowTime.storyName = "Show time";
