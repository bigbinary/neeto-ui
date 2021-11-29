import { Modal, Typography, Pane } from "../../lib/components";
import React from "react";

import DatePicker from "../../lib/components/DatePicker";
import TimePicker from "../../lib/components/TimePicker";

export default {
  title: "Components/Date and Time",
  component: DatePicker,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { DatePicker } from "@bigbinary/neetoui/v2";`',
      },
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

export const TimeInput = (args) => {
  return <TimePicker {...args} />;
};

TimeInput.storyName = "TimePicker";
TimeInput.args = {
  label: "Time",
};

export const DateTimePickerInModal = (args) => {
  return (
    <Modal isOpen>
      <Modal.Header>
        <Typography style="h2">Modal</Typography>
      </Modal.Header>
      <Modal.Body className="space-y-6">
        <div>
          <Typography>Date</Typography>
          <DatePicker {...args} />
        </div>
        <div>
          <Typography>Time</Typography>
          <TimePicker {...args} />
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export const DateTimePickerInPane = (args) => {
  return (
    <Pane isOpen>
      <Pane.Header>
        <Typography style="h3">Pane</Typography>
      </Pane.Header>
      <Pane.Body className="flex flex-col space-y-6">
        <div className="w-full">
          <Typography>Date</Typography>
          <DatePicker {...args} />
        </div>
        <div className="w-full">
          <Typography>Time</Typography>
          <TimePicker {...args} />
        </div>
      </Pane.Body>
    </Pane>
  );
};
