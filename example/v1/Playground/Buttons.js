import React from "react";
import { Button, Dropdown, ActionDropdown } from "../../../lib";
import Header from "../Header";

const Buttons = () => {
  return (
    <div className="w-full">
      <Header title="Buttons" />
      <div className="flex flex-col items-start justify-start p-6">
        <div className="mb-8">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Buttons</h4>
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              style="primary"
              label="Primary Button"
              data-testid="primary-button"
            />
            <Button
              style="secondary"
              label="Secondary Button"
              data-testid="secondary-button"
            />
            <Button
              style="warning"
              label="Warning Button"
              data-testid="warning-button"
            />
            <Button
              style="danger"
              label="Danger Button"
              data-testid="danger-button"
            />
            <Button
              style="text"
              label="Text Button"
              data-testid="text-button"
            />
            <Button
              style="link"
              label="Link Button"
              data-testid="link-button"
            />
          </div>
        </div>
        <div className="mb-8">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Dropdowns</h4>
          <div className="flex flex-row items-center justify-start space-x-6">
            <Dropdown buttonStyle="icon" icon="ri-more-2-fill">
              <li>Download Transcript</li>
              <li>End Chat</li>
            </Dropdown>
            <Dropdown
              label="Dropdown with Action Button"
              buttonStyle="secondary"
              actionButtonProps={{
                style: "link",
                icon: "ri-add-line ri-lg",
                label: "Action Button",
                className: "hover:bg-gray-50",
              }}
              position="bottom"
            >
              <li>Click Me</li>
              <li>Hover Me</li>
            </Dropdown>
            <ActionDropdown
              style="primary"
              buttonProps={{
                label: "Action Dropdown",
              }}
              dropdownProps={{
                autoWidth: true,
              }}
            >
              <li>Secondary Action</li>
              <li>Tertiary Action</li>
            </ActionDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
