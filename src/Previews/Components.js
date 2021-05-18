import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Callout,
  Card,
  IconPicker,
  Pagination,
  PageLoader,
  Tab,
  ColorPicker,
  Accordion,
} from "../../lib";
import Header from "../Header";

const cardItems = ["Card Item 1", "Card Item 2", "Card Item 3"];

const COLOR_PALETTER_LIST = [
  { from: "purple-500", to: "purple-600" },
  { from: "pink-500", to: "pink-600" },
  { from: "green-500", to: "green-600" },
  { from: "red-500", to: "red-600" },
  { from: "blue-500", to: "blue-600" },
  { from: "indigo-500", to: "indigo-600" },
  { from: "yellow-500", to: "yellow-600" }
];

const Components = () => {
  const [icon, setIcon] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const PAGE_SIZE = 5;

  return (
    <div className="w-full">
      <Header title="Components" />
      <div className="flex flex-col items-start justify-start p-6">
        <div className="mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">
            Icon Picker
          </h4>
          <IconPicker value={icon} onChange={setIcon} />
        </div>
        <div className="w-full mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Card</h4>
          <Card rows={1} className="w-1/3 mb-6">
            <Card.Title>Card with Static Children</Card.Title>
            <p className="mb-4">Card Item 1</p>
            <p className="mb-4">Card Item 2</p>
            <p>Card Item 3</p>
          </Card>

          <Card rows={1} className="w-1/3">
            <Card.Title>Card with Dynamic Children</Card.Title>
            {cardItems.map((item) => (
              <p className="mb-4 last:mb-0">{item}</p>
            ))}
          </Card>
        </div>
        <div className="mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Callout</h4>
          <Callout icon={false} style="info">
            <span className="leading-relaxed">
              Press
              <span className="font-semibold"> Shift + ?</span> on your keyboard
              at any point.
            </span>
          </Callout>
        </div>
        <div className="mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Avatar</h4>
          <div className="flex flex-row items-center justify-start space-x-4">
            <Avatar contact={{ name: "Steve Rogers" }} />
            <Avatar status="online" contact={{ name: "Tony Stark" }} />
            <Avatar status="idle" contact={{ name: "Bruce Banner" }} />
            <Avatar status="offline" contact={{ name: "Wanda Maximoff" }} />
            <Avatar activity="view" contact={{ name: "Steven Strange" }} />
            <Avatar activity="type" contact={{ name: "Bucky Barnes" }} />
          </div>
        </div>
        <div className="mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Avatar</h4>
          <div className="flex flex-row items-center justify-start space-x-4">
            <Badge color="red">Red Badge</Badge>
            <Badge color="blue">Blue Badge</Badge>
            <Badge color="green">Green Badge</Badge>
            <Badge color="yellow">Yellow Badge</Badge>
          </div>
        </div>
        <div className="mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Pagination</h4>
          <Pagination
            count={20}
            pageNo={pageNo}
            pageSize={PAGE_SIZE}
            navigate={(index) => setPageNo(index)}
          />
        </div>
        <div className="w-full mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Loader</h4>
          <div className="h-12">
            <PageLoader />
          </div>
        </div>
        <div className="mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Tabs</h4>
          <Tab className="w-full border-bottom">
            <Tab.Item icon="ri-brush-line" onClick={() => {}} active={true}>
              Design
            </Tab.Item>
            <Tab.Item
              icon="ri-chat-settings-line"
              onClick={() => {}}
              active={false}
            >
              Settings
            </Tab.Item>
          </Tab>
        </div>
        <div className="mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">
            Color Picker
          </h4>
          <ColorPicker
            onChange={() => {}}
            color="#fefefe"
            colorPaletteProps={{
              color: "#fefefe",
              colorList: COLOR_PALETTER_LIST,
              onChange: () => {},
            }}
          />
        </div>
        <div className="w-full mb-12">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Accordion</h4>
          <div className="w-96">
            <Accordion className="mt-2" defaultActiveKey={0}>
              <Accordion.Item title="Opened Heading">
                <p className="leading-relaxed text-gray-600">
                  We got a right to pick a little fight, Bonanza! If anyone
                  fights anyone of us, he's gotta fight with me! We're not a one
                  to saddle up and run, Bonanza! Anyone of us who starts a
                  little fuss knows he can count on me! One for four, four for
                  one, this we guarantee. We got a right to pick a little fight,
                  Bonanza! If anyone fights anyone of us he's gotta fight with
                  me!
                </p>
              </Accordion.Item>
              <Accordion.Item title="Closed Heading">
                <p className="leading-relaxed text-gray-600">
                  It seems today that all you see is violence in movies and sex
                  on tv, but where are those good old-fashioned values on which
                  we used to rely? Lucky there's a family guy, lucky there's a
                  man who positively can do all the things that make us laugh
                  and cry - he's our family guy!
                </p>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
