import React, { useState } from "react";
import { Check, Email } from "@bigbinary/neeto-icons";
import {
  Button,
  Tab,
  Radio,
  Checkbox,
  Switch,
  Modal,
  Toastr,
  Pagination,
  Callout,
} from "../../lib/v2";
import Header from "./Header";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState(true);
  return (
    <div className="w-full">
      <Header title="Form Elements" />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Title>They're creepy & they're kooky</Modal.Title>
        Somewhere out in space live The Herculoids! Zok, the laser-ray dragon!
        Igoo, the giant rock ape! Tundro, the tremendous! Gloop and Gleep, the
        formless, fearless wonders! With Zandor, their leader, and his wife,
        Tara, and son, Dorno, they team up to protect their planet from sinister
        invaders! All-strong! All-brave! All-heroes! They're The Herculoids!
        <Modal.Footer className="flex space-x-4">
          <Button
            icon={Check}
            label="Continue"
            onClick={() => setShowModal(false)}
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
      <div className="p-6 space-y-6">
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Tab</h2>
          <Tab className="grid grid-cols-2">
            <Tab.Item active={tab} onClick={() => setTab(true)}>
              Tab 1
            </Tab.Item>
            <Tab.Item active={!tab} onClick={() => setTab(false)}>
              Tab 2
            </Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-3">
            <Tab.Item active>Tab 1</Tab.Item>
            <Tab.Item>Tab 2</Tab.Item>
            <Tab.Item>Tab 3</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-4">
            <Tab.Item active>Tab 1</Tab.Item>
            <Tab.Item>Tab 2</Tab.Item>
            <Tab.Item>Tab 3</Tab.Item>
            <Tab.Item>Tab 4</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-5">
            <Tab.Item active>Tab 1</Tab.Item>
            <Tab.Item>Tab 2</Tab.Item>
            <Tab.Item>Tab 3</Tab.Item>
            <Tab.Item>Tab 4</Tab.Item>
            <Tab.Item>Tab 5</Tab.Item>
          </Tab>
        </div>
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Pagination</h2>
          <Pagination
            count={200}
            pageNo={1}
            pageSize={20}
            siblingCount={1}
            navigate={() => {}}
          />
        </div>
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Callout</h2>
          <Callout icon={Email} style="info">
            We just sent you a temporary sign up code. Please check your inbox and paste the sign up code below.
          </Callout>
          <Callout icon={Email} style="warning">
            We just sent you a temporary sign up code. Please check your inbox and paste the sign up code below.
          </Callout>
          <Callout icon={Email} style="danger">
            We just sent you a temporary sign up code. Please check your inbox and paste the sign up code below.
          </Callout>
        </div>
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Radio, Checkbox and Toggle</h2>
          <div className="flex flex-row items-center justify-start space-x-6">
            <div>
              <Radio>
                <Radio.Item name="radio" />
                <Radio.Item name="radio" disabled />
              </Radio>
            </div>
            <div className="flex space-x-6">
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <Checkbox
                disabled
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
            <div className="flex space-x-6">
              <Switch checked={checked} onChange={() => setChecked(!checked)} />
              <Switch
                disabled
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start space-x-6">
            <div>
              <Radio>
                <Radio.Item name="radio" />
                <Radio.Item name="radio" disabled />
              </Radio>
            </div>
            <div className="flex space-x-6">
              <Checkbox checked onChange={() => {}} />
              <Checkbox checked disabled onChange={() => {}} />
            </div>
            <div className="flex space-x-6">
              <Switch checked onChange={() => {}} />
              <Switch checked disabled onChange={() => {}} />
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show modal" onClick={() => setShowModal(true)} />
          </div>
        </div>
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              label="Show toastr success"
              onClick={() => Toastr.success("Hey there")}
            />
            <Button
              label="Show toastr error"
              onClick={() =>
                Toastr.error(
                  Error(
                    "Some error occured! Please visit https://github.com/bigbinary/neeto-ui"
                  )
                )
              }
            />
            <Button
              label="Show toastr info"
              onClick={() => Toastr.info("Toaster info")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
