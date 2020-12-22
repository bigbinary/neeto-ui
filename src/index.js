import moment from "moment";
import { isEmpty } from "ramda";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, Formik } from "formik";
import {
  ActionBlock,
  Input as FormikInput,
  Radio as FormikRadio,
} from "../lib/components/formik";
import {
  Avatar,
  Button,
  Callout,
  Card,
  DateRangeInput,
  Dropdown,
  IconPicker,
  Input,
  Label,
  Pagination,
  PageLoader,
  Pane,
  Select,
  Tab,
  Checkbox,
  ColorPalette,
  ColorPicker,
  Accordion,
} from "../lib";

const App = () => {
  const [icon, setIcon] = useState(null);
  const [name, setName] = useState("");

  const [startDate, setStartDate] = useState(moment("04-12-2020", "DD-MM-YYYY").toDate());
  const [endDate, setEndDate] = useState(moment("04-12-2020", "DD-MM-YYYY").toDate());
  const [pageNo, setPageNo] = useState(1);
  const PAGE_SIZE = 5;

  const selectOptions = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ];
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const formikRadioOptions = [
    {
      label: "Everyone",
      value: true,
      id: "Everyone"
    },
    {
      label: "Logged in users only",
      value: false,
      id: "Logged in users only"
    }
  ];

  return (
    <div className="flex flex-col m-5 p-5">
      Hello
      <IconPicker value={icon} onChange={setIcon} />

      <Card
        rows={1}
        className="mt-6"
      >
        <Card.Title>My Card Title</Card.Title>
        <p>Card Item 1</p>
        <p>Card Item 2</p>
      </Card>

      <Dropdown buttonStyle="icon" icon="ri-more-2-fill">
        <li>Download Transcript</li>
        <li>End Chat</li>
      </Dropdown>

      <Callout icon={false} style="info">
        <span className="leading-relaxed">
          Press
          <span className="font-semibold"> Shift + ?</span> on your
          keyboard at any point.
        </span>
      </Callout>

      <Label
        required
        helpText="Help Text"
        className="mb-1"
        data-cy="cypress-attrs"
      >
        My Label
      </Label>

      <Avatar
        status="online"
        contact={{ name: "Oliver Smith" }}
      />

      <DateRangeInput
        label="Time period"
        startDateId="start_date_id"
        endDateId="end_date_id"
        value={[startDate, endDate]}
        onChange={([startDate, endDate]) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        minDate={moment("2019-01-01").toDate()}
        maxDate={moment().toDate()}
      />

      <Pagination
        count={17}
        pageNo={pageNo}
        pageSize={PAGE_SIZE}
        navigate={index => setPageNo(index)}
      />

      <PageLoader />

      <Select
        className="mt-4"
        label="Try out the select component"
        required
        placeholder="Select an answer..."
        value={selectedAnswer}
        options={selectOptions}
        onChange={e => setSelectedAnswer(e)}
        isSearchable
      />

      <Tab className="w-full px-6 border-bottom">
        <Tab.Item
          icon="ri-brush-line"
          onClick={() => { }}
          active={true}
        >
          Design
        </Tab.Item>
        <Tab.Item
          icon="ri-chat-settings-line"
          onClick={() => { }}
          active={false}
        >
          Settings
        </Tab.Item>
      </Tab>

      <Button
        data-test-id="open-pane"
        label="Open Pane"
        icon="ri-add-line ri-lg"
        onClick={() => setIsPaneOpen(true)}
      />

      <Pane
        title="Open Pane"
        isOpen={isPaneOpen}
        onClose={() => setIsPaneOpen(false)}
      >
        <p>Pane Content</p>
      </Pane>

      <Input
        type="text"
        label="Name"
        data-test-id="name-input"
        placeholder="Enter your name"
        error={isEmpty(name) && "Your name required*"}
        onChange={e => setName(e.target.value)}
        value={name}
        required={true}
        maxLength={35}
      />

      <Checkbox
        id="uniqueId"
        name="checkbox"
        required
        label="Checkbox"
      />

      <ColorPalette
        color={{ from: "purple-1000", to: "purple-1050" }}
        onChange={() => { }}
      />

      <ColorPicker
        onChange={value => { }}
        color="#fefefe"
        colorPaletteProps={{
          color: "#fefefe",
          onChange: () => { }
        }}
      />

      <Accordion className="mt-2" defaultActiveKey={0}>
        <Accordion.Item title="Opened Heading">
          <h1>This one is already open</h1>
        </Accordion.Item>
        <Accordion.Item title="Closed Heading">
          <h1>Yay! I have opened the accordion</h1>
        </Accordion.Item>
      </Accordion>

      <Formik
        initialValues={{ allow_anyone_to_submit_ticket: "" }}
        onSubmit={() => { }}
      >
        <Form className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm">
          <ActionBlock
            reset-data-test-id="test-id-1"
          />
          <FormikInput
            name="inputField"
            type="text"
            label="Name"
            data-test-id="formik-input"
            placeholder="Enter your name"
            error="Custom error message"
          />
          <FormikRadio
            name="allow_anyone_to_submit_ticket"
            label="Who can submit a ticket?"
            stacked
            options={formikRadioOptions}
          />
        </Form>
      </Formik>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
