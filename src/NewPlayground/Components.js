import React, { useState } from "react";
import { Check } from "@bigbinary/neeto-icons";
import {
  Button,
  Tab,
  Radio,
  Checkbox,
  Switch,
  Modal,
  Toastr,
} from "../../lib/v2";
import Header from "../Header";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="w-full">
      <Header title="Components" />
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
          <Tab className="grid grid-cols-2">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-3">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
            <Tab.Item>Label 3</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-4">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
            <Tab.Item>Label 3</Tab.Item>
            <Tab.Item>Label 4</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-5">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
            <Tab.Item>Label 3</Tab.Item>
            <Tab.Item>Label 4</Tab.Item>
            <Tab.Item>Label 5</Tab.Item>
          </Tab>
        </div>
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
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
              label="Show toastr"
              onClick={() => Toastr.success("Hey there")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
