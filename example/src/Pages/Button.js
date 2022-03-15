import React, { useState } from "react";
import { Button } from "../../../lib/components";
import Header from "../Header";
import { Keyboard } from "@bigbinary/neeto-icons";

const Buttons = () => {
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setLoading(!loading);
  };
  return (
    <div className="w-full">
      <Header title="Buttons" />
      <div className="p-6 space-y-6">
        <Button onClick={toggle} label="Toggle Loading State" />
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Styles</h2>
          <div className="flex gap-10">
            <div className="flex flex-col gap-6 items-start">
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Primary"
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Primary"
                disabled
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Primary"
                icon={Keyboard}
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Primary"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Primary"
                icon={Keyboard}
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Primary"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button loading onClick={toggle} size="large" icon={Keyboard} />
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Secondary"
                style="secondary"
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Secondary"
                style="secondary"
                disabled
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Secondary"
                style="secondary"
                icon={Keyboard}
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Secondary"
                style="secondary"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Secondary"
                style="secondary"
                icon={Keyboard}
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Secondary"
                style="secondary"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                style="secondary"
                icon={Keyboard}
                iconPosition="left"
              />
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Danger"
                style="danger"
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Danger"
                style="danger"
                disabled
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Danger"
                style="danger"
                icon={Keyboard}
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Danger"
                style="danger"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Danger"
                style="danger"
                icon={Keyboard}
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Danger"
                style="danger"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                style="danger"
                icon={Keyboard}
                iconPosition="left"
              />
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Text"
                style="text"
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Text"
                style="text"
                disabled
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Text"
                style="text"
                icon={Keyboard}
              />
              <Button
                loading={loading}
                onClick={toggle}
                size="large"
                label="Text"
                style="text"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Text"
                style="text"
                icon={Keyboard}
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                label="Text"
                style="text"
                icon={Keyboard}
                iconPosition="left"
              />
              <Button
                loading
                onClick={toggle}
                size="large"
                style="text"
                icon={Keyboard}
              />
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Button size="large" label="Link" style="link" />
              <Button size="large" label="Link" style="link" disabled />
              <Button size="large" label="Link" style="link" icon={Keyboard} />
              <Button size="large" label="Link" style="link" icon={Keyboard} iconPosition="left"/>
              <Button loading size="large" label="Link" style="link" icon={Keyboard} iconPosition="left"/>
              <Button loading size="large" label="Link" style="link" icon={Keyboard}/>
              <Button loading size="large" style="link" icon={Keyboard}/>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Sizes</h2>
          <div className="flex flex-row flex-wrap items-center justify-start gap-4">
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              label="Large"
              style="primary"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              style="primary"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              label="Large"
              style="secondary"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              style="secondary"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              label="Large"
              style="danger"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              style="danger"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              label="Large"
              style="text"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              style="text"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="xlarge"
              label="Large"
              style="link"
            />
          </div>
          <div className="flex flex-row flex-wrap items-center justify-start gap-4">
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              label="Large"
              style="primary"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              style="primary"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              label="Large"
              style="secondary"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              style="secondary"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              label="Large"
              style="danger"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              style="danger"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              label="Large"
              style="text"
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              style="text"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              size="large"
              label="Large"
              style="link"
            />
          </div>
          <div className="flex flex-row flex-wrap items-center justify-start gap-4">
            <Button
              loading={loading}
              onClick={toggle}
              label="Default"
              style="primary"
            />
            <Button
              loading={loading}
              onClick={toggle}
              style="primary"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              label="Default"
              style="secondary"
            />
            <Button
              loading={loading}
              onClick={toggle}
              style="secondary"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              label="Large"
              style="danger"
            />
            <Button
              loading={loading}
              onClick={toggle}
              style="danger"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              label="Default"
              style="text"
            />
            <Button
              loading={loading}
              onClick={toggle}
              style="text"
              icon={Keyboard}
            />
            <Button
              loading={loading}
              onClick={toggle}
              label="Default"
              style="link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
