import React, { useState } from "react";
import { Input } from "../../lib/v2";
import Header from "./Header";
import { Favorite } from "@bigbinary/neeto-icons";

const Buttons = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("Text");
  const toggle = () => {
    setLoading(!loading);
  };
  return (
    <div className="w-full">
      <Header title="Input Fields" />
      <div className="p-6 space-y-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Input/Small/Default</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" />
            <Input
              placeholder="Input Placeholder"
              prefix={<Favorite size={16} />}
            />
            <Input placeholder="Input Placeholder" />
            <Input placeholder="Input Placeholder" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" />
            <Input
              placeholder="Input Placeholder"
              prefix={<Favorite size={16} />}
            />
            <Input placeholder="Input Placeholder" />
            <Input placeholder="Input Placeholder" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              autoFocus
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              prefix={<Favorite size={16} />}
              value={input}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" disabled />
            <Input
              placeholder="Input Placeholder"
              prefix={<Favorite size={16} />}
              disabled
            />
            <Input placeholder="Input Placeholder" disabled />
            <Input placeholder="Input Placeholder" disabled />
          </div>
        </div>
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Input/Large</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" size="large" />
            <Input
              placeholder="Input Placeholder"
              size="large"
              prefix={<Favorite size={16} />}
            />
            <Input placeholder="Input Placeholder" size="large" />
            <Input placeholder="Input Placeholder" size="large" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" size="large" />
            <Input
              placeholder="Input Placeholder"
              size="large"
              prefix={<Favorite size={16} />}
            />
            <Input placeholder="Input Placeholder" size="large" />
            <Input placeholder="Input Placeholder" size="large" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              size="large"
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              size="large"
              value={input}
              prefix={<Favorite size={16} />}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              size="large"
              value={input}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              size="large"
              value={input}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" size="large" disabled />
            <Input
              placeholder="Input Placeholder"
              size="large"
              prefix={<Favorite size={16} />}
              disabled
            />
            <Input placeholder="Input Placeholder" size="large" disabled />
            <Input placeholder="Input Placeholder" size="large" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
