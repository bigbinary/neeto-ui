import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../lib/components/layouts/Header";
import Button from "../lib/components/Button";

export default {
  title: "Layouts/Header",
  component: Header,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Header } from "@bigbinary/neetoui/v2/layouts";`',
      },
    },
  },
};

const SidebarHandleIcon = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path stroke={color} strokeWidth="1.5" d="M3 7.25L21 7.25"></path>
      <path stroke={color} strokeWidth="1.5" d="M3 11.25L15 11.25"></path>
      <path stroke={color} strokeWidth="1.5" d="M3 15.25L11 15.25"></path>
    </svg>
  );
};

export const BasicUsage = () => {
  return (
    <Router>
      <Header
        title={
          <div className="flex items-center">
            <h3>Layouts</h3>
          </div>
        }
        menuBarHandle={
          <Button
            style="text"
            className="mr-2"
            icon={() => <SidebarHandleIcon size={20} color={"#68737D"} />}
          />
        }
        actionBlock={<Button label="Primary Action" />}
        breadcrumbs={[{ text: "Home", link: "/" }]}
      />
    </Router>
  );
};
