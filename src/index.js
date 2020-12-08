import moment from "moment";
import { isEmpty } from "ramda";
import React, { useState } from "react";
import ReactDOM from "react-dom";
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
